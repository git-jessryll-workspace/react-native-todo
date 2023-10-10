import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {CheckCircleIcon, TrashIcon} from 'react-native-heroicons/outline';
import {CheckCircleIcon as SolidCheckCircleIcon} from 'react-native-heroicons/solid';
import {TodoItemStyle} from '../../styles';

type Props = {
  id: number;
  name: string;
  status: string;
  removeTodo: (id: number) => void;
  updateTodoStatus: (id: number, status: string) => void;
};

const TodoItem: React.FC<Props> = ({
  name,
  id,
  status,
  removeTodo,
  updateTodoStatus,
}): JSX.Element => {
  return (
    <View style={TodoItemStyle.todoItem}>
      <View style={TodoItemStyle.todoTextWrapper}>
        <View style={TodoItemStyle.checkIconWrapper}>
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
            <Text
              style={[
                TodoItemStyle.textWrapper,
                status === 'done'
                  ? TodoItemStyle.lineThrough
                  : TodoItemStyle.noneDecoration,
              ]}>
              {name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={TodoItemStyle.trashIconWrapper}>
        <TrashIcon color={'#000'} size={20} onPress={() => removeTodo(id)} />
      </View>
    </View>
  );
};

export default TodoItem;
