import {FilterTodo, TodoForm, TodoList} from '../components/Todos';
import TodoEmptyState from '../components/Todos/TodoEmptyState';
import {TodoContextProps, useTodo} from '../context/TodoProvider';
import {TodoItemType} from '../types/todo';

const TodoPage = (): JSX.Element => {
  const {filteredTodoItems, filterBy, textTodo} = useTodo() as TodoContextProps;

  return (
    <>
      <TodoForm textTodo={textTodo}/>
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
