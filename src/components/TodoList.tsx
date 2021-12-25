type Props = {
  todos: string[];
  deleteTodo: (index: number) => void;
  updateTodo: (index: number) => void;
};

export const TodoList = (props: Props) => {
  const { todos, deleteTodo, updateTodo } = props;

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
