import {useCallback} from 'react';
import {TodoItemType} from '../types/todo';

type Props = {
  filterBy: string;
  todos: TodoItemType[];
};

export const useTodoFilter = ({filterBy, todos}: Props) => {
  const filteredItems = useCallback(
    () =>
      todos
        .filter((todo: TodoItemType) => {
          if (filterBy === 'all') {
            return true;
          }
          return todo.status.toLowerCase() === filterBy.toLowerCase();
        }),
    [ filterBy, todos],
  );

  return {
    filteredItems: filteredItems(),
  };
};
