import { ChangeEvent, useState } from "react";
import { TodoList } from "./components/TodoList";
import { SearchedTodoList } from "./components/SearchedTodoList";

export const App = () => {
  const [text, setText] = useState<string>("");
  const [updateText, setUpdateText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [searchedTodos, setSearchedTodos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onChangeUpdateText = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateText(e.target.value);
  };

  const onChangeSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const addTodo = () => {
    const latestTodos = [...todos];
    latestTodos.push(text);
    setTodos(latestTodos);
  };

  const deleteTodo = (index: number) => {
    const latestTodos = [...todos];
    latestTodos.splice(index, 1);
    setTodos(latestTodos);
  };

  const updateTodo = (index: number) => {
    const latestTodos = [...todos];
    latestTodos.splice(index, 1, updateText);
    setTodos(latestTodos);
  };

  const searchTodos = () => {
    let searchedTodos: string[] = [];
    searchedTodos = todos.filter((todo) => {
      return todo === searchWord;
    });
    setSearchedTodos(searchedTodos);
  };

  return (
    <>
      <h1>ToDoアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <input type="text" value={updateText} onChange={onChangeUpdateText} />
      <button onClick={addTodo}>追加</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <input type="text" value={searchWord} onChange={onChangeSearchWord} />
      <button
        onClick={() => {
          searchTodos();
        }}
      >
        検索
      </button>
      <SearchedTodoList searchedTodos={searchedTodos} />
    </>
  );
};

export default App;
