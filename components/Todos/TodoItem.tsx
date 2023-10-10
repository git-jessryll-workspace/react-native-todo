import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {CheckCircleIcon, TrashIcon} from 'react-native-heroicons/outline';
import {CheckCircleIcon as SolidCheckCircleIcon} from 'react-native-heroicons/solid';
import {TodoItemStyle} from '../../styles';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';

type Props = {
  item: {
    id: number;
    name: string;
    status: string;
  };
};

const TodoItem: React.FC<Props> = ({item}): JSX.Element => {
  const {status, id, name} = item;
  const {removeTodo, updateTodoStatus} = useTodo() as TodoContextProps;

  const {
    todoItem: todoItemStyle,
    todoTextWrapper: todoTextWrapperStyle,
    checkIconWrapper: checkIconWrapperStyle,
    textWrapper: textWrapperStyle,
    lineThrough: lineThroughStyle,
    noneDecoration: noneDecorationStyle,
    trashIconWrapper: trashIconWrapperStyle,
  } = TodoItemStyle;

  return (
    <View style={todoItemStyle}>
      <View style={todoTextWrapperStyle}>
        <View style={checkIconWrapperStyle}>
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
                textWrapperStyle,
                status === 'done' ? lineThroughStyle : noneDecorationStyle,
              ]}>
              {name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={trashIconWrapperStyle}>
        <TrashIcon color={'#000'} size={20} onPress={() => removeTodo(id)} />
      </View>
    </View>
  );
};

export default React.memo(TodoItem);
