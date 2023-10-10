import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import {TodoItemType} from '../types/todo';

export type TodoContextProps = {
  todos: TodoItemType[];
  filterBy: string;
  setFilterBy: Dispatch<SetStateAction<string>>;
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  updateTodoStatus: (id: number, status: string) => void;
};

const TodoContext = createContext<TodoContextProps | null>(null);

export const useTodo = () => useContext(TodoContext);

const TodoProvider: FC<{children: ReactNode}> = ({children}) => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [filterBy, setFilterBy] = useState('all');

  const addTodo = (text: string) => {
    setTodos((todos: TodoItemType[]) => {
      return [
        ...todos,
        {
          id: new Date().getTime(),
          name: text,
          status: 'active',
        },
      ];
    });
  };

  const removeTodo = useCallback(
    (id: number) => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

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
        filterBy,
        setFilterBy,
        addTodo,
        removeTodo,
        updateTodoStatus,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
