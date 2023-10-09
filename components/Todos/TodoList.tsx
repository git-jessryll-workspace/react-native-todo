import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';

const styles = StyleSheet.create({
  containerTodoList: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

type Props = {
  todos: {
    id: number;
    name: string;
    status: string;
  }[];
};

const TodoListComponent: React.FC<Props> = ({todos}) => {
  const {removeTodo, updateTodoStatus} = useTodo() as TodoContextProps;
  return (
    <FlatList
      style={styles.containerTodoList}
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
