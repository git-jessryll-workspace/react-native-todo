import React from 'react';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';
import {TodoListStyle} from '../../styles';

type Props = {
  todos: {
    id: number;
    name: string;
    status: string;
  }[];
};

const TodoListComponent: React.FC<Props> = ({todos}): JSX.Element => {
  const {removeTodo, updateTodoStatus} = useTodo() as TodoContextProps;
  return (
    <FlatList
      style={TodoListStyle.containerTodoList}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          name={item.name}
          id={item.id}
          status={item.status}
          removeTodo={removeTodo}
          updateTodoStatus={updateTodoStatus}
        />
      )}
      keyExtractor={(item: any) => item.id}
    />
  );
};
const TodoList = React.memo(TodoListComponent);
export default TodoList;
