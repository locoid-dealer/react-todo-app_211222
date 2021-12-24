import { ChangeEvent, useState } from "react";

export const App = () => {
  const [text, setText] = useState<string>("");
  const [updatedText, setUpdatedText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onChangeUpdatedText = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedText(e.target.value);
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
    latestTodos.splice(index, 1, updatedText);
    setTodos(latestTodos);
  };

  return (
    <>
      <h1>ToDoアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <input type="text" value={updatedText} onChange={onChangeUpdatedText} />
      <button onClick={addTodo}>追加</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <p>
                {todo} {index}
              </p>
              <button
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                削除
              </button>
              <button
                onClick={() => {
                  updateTodo(index);
                }}
              >
                更新
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
