import {useMemo} from 'react';
import {TodoItemType} from '../types/todo';

type Props = {
  filterBy: string;
  todos: TodoItemType[];
  textTodo: string;
};

export const useTodoFilter = ({filterBy, todos, textTodo}: Props) => {
  const filteredItems = useMemo(
    () =>
      todos
        .filter((todo: TodoItemType) =>
          todo.name.toLowerCase().includes(textTodo.toLowerCase()),
        )
        .filter((todo: TodoItemType) => {
          if (filterBy === 'all') {
            return true;
          }
          return todo.status.toLowerCase() === filterBy.toLowerCase();
        }),
    [filterBy, todos, textTodo],
  );

  return {
    filteredItems: filteredItems,
  };
};
