import {FilterTodo, TodoForm, TodoList} from '../components/Todos';
import TodoEmptyState from '../components/Todos/TodoEmptyState';
import {TodoContextProps, useTodo} from '../context/TodoProvider';
import {TodoItemType} from '../types/todo';

const TodoPage = (): JSX.Element => {
  const {filteredTodoItems, filterBy} = useTodo() as TodoContextProps;

  return (
    <>
      <TodoForm />
      <FilterTodo filterBy={filterBy} />
      {filteredTodoItems.length === 0 ? (
        <TodoEmptyState />
      ) : (
        <TodoList todos={filteredTodoItems as TodoItemType[]} />
      )}
    </>
  );
};
export default TodoPage;
