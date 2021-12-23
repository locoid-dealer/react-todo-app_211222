import { ChangeEvent, useState } from "react";

export const App = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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

  return (
    <>
      <h1>ToDoアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
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
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
