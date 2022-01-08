import { ChangeEvent, useState } from "react";
import { TodoList } from "./components/TodoList";
import { SearchedTodoList } from "./components/SearchedTodoList";
import { useTodoList } from "./hooks/useTodoList";

export const App = () => {
  const {
    todos,
    searchedTodos,
    useAddTodo,
    useDeleteTodo,
    useUpdateTodo,
    useSearchTodos,
  } = useTodoList();

  const [text, setText] = useState<string>("");
  const [updateText, setUpdateText] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onChangeUpdateText = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateText(e.target.value);
  };
  const onChangeSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const AddTodo = (text: string) => {
    useAddTodo(text);
  };
  const DeleteTodo = (index: number) => {
    useDeleteTodo(index);
  };
  const UpdateTodo = (index: number, updateText: string) => {
    useUpdateTodo(index, updateText);
  };
  const SearchTodos = (searchWord: string) => {
    useSearchTodos(searchWord);
  };

  return (
    <>
      <h1>ToDoアプリ</h1>
      <p>2022.1.8 contribution</p>
      <p>2022.1.8 contribution 2回目</p>
      <input type="text" value={text} onChange={onChangeText} />
      <input type="text" value={updateText} onChange={onChangeUpdateText} />
      <button onClick={() => {
        AddTodo(text)}}>追加</button>
      <TodoList todos={todos} updateText={updateText} deleteTodo={DeleteTodo} updateTodo={(index: number, updateText: string) => {
        UpdateTodo(index, updateText)}} />
      <input type="text" value={searchWord} onChange={onChangeSearchWord} />
      <button
        onClick={() => {
          SearchTodos(searchWord);
        }}
      >
        検索
      </button>
      <SearchedTodoList searchedTodos={searchedTodos} />
    </>
  );
};

export default App;
