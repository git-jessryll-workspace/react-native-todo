import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {CheckCircleIcon, TrashIcon} from 'react-native-heroicons/outline';
import {CheckCircleIcon as SolidCheckCircleIcon} from 'react-native-heroicons/solid';

type Props = {
  id: number;
  name: string;
  status: string;
  removeTodo: (id: number) => void;
  updateTodoStatus: (id: number, status: string) => void;
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 8,
    borderWidth: 1,
    marginVertical: 3,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
  },
});

const TodoItem: React.FC<Props> = ({
  name,
  id,
  status,
  removeTodo,
  updateTodoStatus,
}) => {
  return (
    <View style={styles.todoItem}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          flexWrap: 'wrap',
        }}>
        <View
          style={{
            width: '10%',
            display: 'flex',
            alignItems: 'center',
            paddingRight: 5
          }}>
          {status === 'active' && (
            <CheckCircleIcon
              size={24}
              color={'#000'}
              onPress={() => updateTodoStatus(id, 'done')}
            />
          )}
          {status === 'done' && (
            <SolidCheckCircleIcon
              size={24}
              color={'#000'}
              onPress={() => updateTodoStatus(id, 'active')}
            />
          )}
        </View>
        <TouchableWithoutFeedback
          onPress={() =>
            updateTodoStatus(id, status === 'done' ? 'active' : 'done')
          }>
          <View style={{width: '90%'}}>
            <Text style={styles.todoText}>{name}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          width: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TrashIcon color={'#000'} size={20} onPress={() => removeTodo(id)} />
      </View>
    </View>
  );
};

export default TodoItem;
