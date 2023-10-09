import {TodoItemType} from '../types/todo';

type Props = {
  filterBy: string;
  todos: TodoItemType[];
};

export const useTodoFilter = ({filterBy, todos}: Props) => {
  const filteredItems = todos.filter((todo: TodoItemType) => {
    if (filterBy === 'all') {
      return true;
    }
    return todo.status.toLowerCase() === filterBy.toLowerCase();
  });

  return {
    filteredItems: filteredItems,
  };
};
