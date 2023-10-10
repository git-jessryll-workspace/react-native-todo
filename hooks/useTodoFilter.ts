import {useCallback} from 'react';
import {TodoItemType} from '../types/todo';

type Props = {
  filterBy: string;
  todos: TodoItemType[];
  textTodo: string;
};

export const useTodoFilter = ({filterBy, todos, textTodo}: Props) => {
  const filteredItems = useCallback(
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
    [textTodo, filterBy, todos],
  );

  return {
    filteredItems: filteredItems(),
  };
};
