import {useCallback, useState} from 'react';
import {FilterTodo, TodoForm, TodoList} from '../components/Todos';
import TodoEmptyState from '../components/Todos/TodoEmptyState';
import {TodoContextProps, useTodo} from '../context/TodoProvider';
import {TodoItemType} from '../types/todo';
import {Keyboard, View} from 'react-native';
import {useTodoFilter} from '../hooks/useTodoFilter';

const TodoPage = (): JSX.Element => {
  const {filterBy, addTodo, todos} = useTodo() as TodoContextProps;
  const [textTodo, setTextTodo] = useState<string>('');
  const {filteredItems: filteredTodoItems} = useTodoFilter({
    todos,
    filterBy,
    textTodo,
  });

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
    <View style={{height: 'auto', backgroundColor: '#FFF'}}>
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
    </View>
  );
};
export default TodoPage;
