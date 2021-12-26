import { useState } from "react";

export const useTodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [searchedTodos, setSearchedTodos] = useState<string[]>([]);

  const useAddTodo = (text: string) => {
    const latestTodos = [...todos];
    latestTodos.push(text);
    setTodos(latestTodos);
  };

  const useDeleteTodo = (index: number) => {
    const latestTodos = [...todos];
    latestTodos.splice(index, 1);
    setTodos(latestTodos);
  };

  const useUpdateTodo = (index: number, updateText: string) => {
    const latestTodos = [...todos];
    latestTodos.splice(index, 1, updateText);
    setTodos(latestTodos);
  };

  const useSearchTodos = (searchWord: string) => {
    let searchedTodos: string[] = [];
    searchedTodos = todos.filter((todo) => {
      return todo === searchWord;
    });
    setSearchedTodos(searchedTodos);
  };

  return {
    todos,
    searchedTodos,
    useAddTodo,
    useDeleteTodo,
    useUpdateTodo,
    useSearchTodos,
  };
};
