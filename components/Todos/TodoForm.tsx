import {StyleSheet, Text, TextInput, View} from 'react-native';
import {PlusCircleIcon} from 'react-native-heroicons/outline';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';

const styles = StyleSheet.create({
  formPanel: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingBottom: 12,
  },
  formTodoInput: {
    width: '90%',
    fontSize: 14,
    padding: 10,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 40,
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Poppins Regular',
  },
  inputForm: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  plusIconWrapper: {
    position: 'absolute',
    top: 0.5,
    right: 3,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 50,
    margin: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const TodoForm = () => {
  const {textTodo, setTextTodo, addTodo} = useTodo() as TodoContextProps;
  return (
    <View style={styles.formPanel}>
      <Text style={styles.mainTitle}>My Todos</Text>
      <View style={styles.inputForm}>
        <TextInput
          value={textTodo}
          onChangeText={text => setTextTodo(text)}
          style={styles.formTodoInput}
          placeholder="Create new todo..."
        />
        <PlusCircleIcon
          style={styles.plusIconWrapper}
          size={30}
          onPress={addTodo}
          color={'#000'}
        />
      </View>
    </View>
  );
};

export default TodoForm;
