import {StyleSheet} from 'react-native';

const TodoFilterItemStyle = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 5,
    borderWidth: 1,
  },
  activeBg: {
    backgroundColor: '#1c1c1c',
  },
  inActiveBg: {
    backgroundColor: '#FFF',
  },
  textWrapper: {
    width: 70,
    paddingVertical: 6,
    textAlign: 'center',
  },
  activeText: {
    color: '#FFF',
    fontWeight: '700',
  },
  inActiveText: {
    color: '#1c1c1c',
    fontWeight: 'normal',
  },
});


export default TodoFilterItemStyle;
