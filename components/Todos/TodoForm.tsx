import {Text, TextInput, View} from 'react-native';
import {PlusCircleIcon} from 'react-native-heroicons/outline';
import {TodoFormStyle} from '../../styles';
import {FC, memo} from 'react';

const TodoForm: FC<{
  onChange: (text: string) => void;
  textTodo: string;
  addTodoItem: () => void;
}> = ({onChange, textTodo, addTodoItem}): JSX.Element => {
  const {
    formPanel: formPanelStyle,
    mainTitle: mainTitleStyle,
    inputForm: inputFormStyle,
    iconPlusWrapper: iconPlusWrapperStyle,
  } = TodoFormStyle;

  return (
    <View style={formPanelStyle}>
      <Text style={mainTitleStyle}>My Todos</Text>
      <View style={inputFormStyle}>
        <TextInput
          value={textTodo}
          onChangeText={text => onChange(text)}
          style={TodoFormStyle.formTodoInput}
          placeholder={'Create new todo...'}
        />
        <View style={iconPlusWrapperStyle}>
          <PlusCircleIcon size={36} onPress={addTodoItem} color={'#1c1c1c'} />
        </View>
      </View>
    </View>
  );
};

export default memo(TodoForm);
