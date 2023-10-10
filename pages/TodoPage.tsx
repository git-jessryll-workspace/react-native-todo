import {useCallback, useState} from 'react';
import {FilterTodo, TodoForm, TodoList} from '../components/Todos';
import TodoEmptyState from '../components/Todos/TodoEmptyState';
import {TodoContextProps, useTodo} from '../context/TodoProvider';
import {TodoItemType} from '../types/todo';
import {Keyboard} from 'react-native';

const TodoPage = (): JSX.Element => {
  const {filteredTodoItems, filterBy, addTodo} = useTodo() as TodoContextProps;
  const [textTodo, setTextTodo] = useState('');

  const onChangeText = useCallback(
    (text: string) => {
      setTextTodo(text);
    },
    [textTodo],
  );
  
  const addTodoItem = useCallback(() => {
    addTodo(textTodo);
    setTextTodo('');
    Keyboard.dismiss();
  }, [textTodo]);

  return (
    <>
      <TodoForm
        onChange={onChangeText}
        textTodo={textTodo}
        addTodoItem={addTodoItem}
      />
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
