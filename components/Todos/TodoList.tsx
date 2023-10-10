import React from 'react';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem';
import {TodoListStyle} from '../../styles';

type Props = {
  todos: {
    id: number;
    name: string;
    status: string;
  }[];
};

const TodoList: React.FC<Props> = ({todos}): JSX.Element => {
  return (
    <FlatList
      style={TodoListStyle.containerTodoList}
      data={todos}
      renderItem={({item}) => <TodoItem item={item} />}
      keyExtractor={(item: any) => item.id}
    />
  );
};
export default React.memo(TodoList);
