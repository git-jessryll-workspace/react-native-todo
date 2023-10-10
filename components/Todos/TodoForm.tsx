import {Text, TextInput, View} from 'react-native';
import {PlusCircleIcon} from 'react-native-heroicons/outline';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';
import {TodoFormStyle} from '../../styles';

const TodoForm = (): JSX.Element => {
  const {textTodo, setTextTodo, addTodo} = useTodo() as TodoContextProps;
  return (
    <View style={TodoFormStyle.formPanel}>
      <Text style={TodoFormStyle.mainTitle}>My Todos</Text>
      <View style={TodoFormStyle.inputForm}>
        <TextInput
          value={textTodo}
          onChangeText={text => setTextTodo(text)}
          style={TodoFormStyle.formTodoInput}
          placeholder="Create new todo..."
        />
        <View style={TodoFormStyle.iconPlusWrapper}>
          <PlusCircleIcon size={36} onPress={addTodo} color={'#000'} />
        </View>
      </View>
    </View>
  );
};

export default TodoForm;
