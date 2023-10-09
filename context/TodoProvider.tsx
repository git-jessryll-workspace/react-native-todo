import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import {TodoItemType} from '../types/todo';
import {useTodoFilter} from '../hooks/useTodoFilter';

export type TodoContextProps = {
  todos: TodoItemType[];
  filteredTodoItems: TodoItemType[];
  textTodo: string;
  setTextTodo: Dispatch<SetStateAction<string>>;
  filterBy: string;
  setFilterBy: Dispatch<SetStateAction<string>>;
  addTodo: () => void;
  removeTodo: (id: number) => void;
  updateTodoStatus: (id: number, status: string) => void;
};

const TodoContext = createContext<TodoContextProps | null>(null);

export const useTodo = () => useContext(TodoContext);

const TodoProvider: FC<{children: ReactNode}> = ({children}) => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [textTodo, setTextTodo] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const {filteredItems} = useTodoFilter({filterBy, todos});

  const addTodo = () => {
    setTodos((todos: TodoItemType[]) => {
      return [
        ...todos,
        {
          id: new Date().getTime(),
          name: textTodo,
          status: 'active',
        },
      ];
    });
    setTextTodo('');
  };

  const removeTodo = (id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const updateTodoStatus = (id: number, status: string) => {
    setTodos(todos =>
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            status,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        textTodo,
        setTextTodo,
        filterBy,
        setFilterBy,
        addTodo,
        removeTodo,
        updateTodoStatus,
        filteredTodoItems: filteredItems,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
