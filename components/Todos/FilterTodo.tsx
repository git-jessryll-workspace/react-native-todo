import {Text, TouchableHighlight, View} from 'react-native';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';

const FilterTodo = (): JSX.Element => {
  const {setFilterBy, filterBy} = useTodo() as TodoContextProps;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        paddingBottom: 8,
        alignItems: 'center',
      }}>
      <TouchableHighlight
        style={{marginRight: 8}}
        onPress={() => setFilterBy('all')}>
        <View
          style={{
            backgroundColor: filterBy === 'all' ? 'black' : '#FFF',
            borderRadius: 5,
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: filterBy === 'all' ? '#FFF' : '#000',
              width: 70,
              paddingVertical: 6,
              textAlign: 'center',
              fontWeight: filterBy === 'all' ? '700' : 'normal',
            }}>
            All
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={{marginRight: 8}}
        onPress={() => setFilterBy('active')}>
        <View
          style={{
            backgroundColor: filterBy === 'active' ? 'black' : '#FFF',
            borderRadius: 5,
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: filterBy === 'active' ? '#FFF' : '#000',
              width: 70,
              paddingVertical: 6,
              textAlign: 'center',
              fontWeight: filterBy === 'active' ? '700' : 'normal',
            }}>
            Active
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => setFilterBy('done')}>
        <View
          style={{
            backgroundColor: filterBy === 'done' ? 'black' : '#FFF',
            borderRadius: 5,
            borderWidth: 1,
          }}>
          <Text
            style={{
              color: filterBy === 'done' ? '#FFF' : '#000',
              width: 70,
              paddingVertical: 6,
              textAlign: 'center',
              fontWeight: filterBy === 'done' ? '700' : 'normal',
            }}>
            Done
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default FilterTodo;
