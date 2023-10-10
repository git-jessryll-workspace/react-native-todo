import {StyleSheet} from 'react-native';

const TodoItemStyle = StyleSheet.create({
  todoItem: {
    padding: 8,
    borderWidth: 1,
    marginVertical: 3,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  trashIconWrapper: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIconWrapper: {
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    paddingRight: 5,
  },
  todoTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    flexWrap: 'wrap',
  },
  textWrapper: {
    fontSize: 16,
    textDecorationStyle: 'solid',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  noneDecoration: {
    textDecorationLine: 'none',
  },
});

export default TodoItemStyle;
