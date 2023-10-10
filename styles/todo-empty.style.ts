import {StyleSheet} from 'react-native';

const TodoEmptyStyle = StyleSheet.create({
  emptyPanel: {
    display: 'flex',
    height: 300,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignContent: 'center',
  },
  emptyText: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins Regular, sans-serif',
  },
});

export default TodoEmptyStyle;
