import { StyleSheet } from "react-native";
const TodoFormStyle = StyleSheet.create({
    formPanel: {
      backgroundColor: '#FFF',
      paddingHorizontal: 10,
      paddingBottom: 12,
    },
    formTodoInput: {
      width: '90%',
      fontSize: 14,
      padding: 10,
      color: '#1c1c1c'
    },
    mainTitle: {
      fontSize: 24,
      color: '#1c1c1c',
      fontWeight: '900',
      paddingTop: 40,
      paddingBottom: 10,
      textAlign: 'center',
      fontFamily: 'Poppins Regular, sans-serif',
    },
    inputForm: {
      position: 'relative',
      borderWidth: 1.5,
      borderColor: '#1c1c1c',
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconPlusWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default TodoFormStyle;