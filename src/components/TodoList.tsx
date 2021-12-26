type Props = {
  todos: string[];
  updateText: string;
  deleteTodo: (index: number) => void;
  updateTodo: (index: number, updateText: string) => void;
};

export const TodoList = (props: Props) => {
  const { todos, updateText, deleteTodo, updateTodo } = props;

  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
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
                  updateTodo(index, updateText);
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
