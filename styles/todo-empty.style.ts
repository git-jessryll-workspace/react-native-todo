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
    fontWeight: '500',
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Poppins Bold, sans-serif',
  },
});

export default TodoEmptyStyle;
