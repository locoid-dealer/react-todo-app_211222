type Props = {
  searchedTodos: string[];
};

export const SearchedTodoList = (props: Props) => {
  const { searchedTodos } = props;

  return (
    <>
      <ul>
        {searchedTodos.map((searchedTodo, index) => {
          return (
            <li key={index}>
              {searchedTodo} {index}
            </li>
          );
        })}
      </ul>
    </>
  );
};
