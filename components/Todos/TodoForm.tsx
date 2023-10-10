import {Text, TextInput, View} from 'react-native';
import {PlusCircleIcon} from 'react-native-heroicons/outline';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';
import {TodoFormStyle} from '../../styles';
import {FC, memo} from 'react';

const TodoForm: FC<{textTodo: string}> = ({textTodo}): JSX.Element => {
  const {setTextTodo, addTodo} = useTodo() as TodoContextProps;
  const {
    formPanel: formPanelStyle,
    mainTitle: mainTitleStyle,
    inputForm: inputFormStyle,
    formTodoInput: formTodoInputStyle,
    iconPlusWrapper: iconPlusWrapperStyle,
  } = TodoFormStyle;

  return (
    <View style={formPanelStyle}>
      <Text style={mainTitleStyle}>My Todos</Text>
      <View style={inputFormStyle}>
        <TextInput
          value={textTodo}
          onChangeText={text => setTextTodo(text)}
          style={formTodoInputStyle}
          placeholder="Create new todo..."
        />
        <View style={iconPlusWrapperStyle}>
          <PlusCircleIcon size={36} onPress={addTodo} color={'#000'} />
        </View>
      </View>
    </View>
  );
};

export default memo(TodoForm);
