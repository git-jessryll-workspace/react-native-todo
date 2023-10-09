import { FilterTodo, TodoForm, TodoList } from "../components/Todos";
import { TodoContextProps, useTodo } from "../context/TodoProvider";
import { TodoItemType } from "../types/todo";

const TodoPage = () => {
    const {filteredTodoItems} = useTodo() as TodoContextProps;
  return (
    <>
      <TodoForm/>
      <FilterTodo/>
      <TodoList todos={filteredTodoItems as TodoItemType[]}/>
    </>
  );
};
export default TodoPage;
