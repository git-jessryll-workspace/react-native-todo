import {Text, View} from 'react-native';
import {TodoEmptyStyle} from '../../styles';

const TodoEmptyState = () => {
  return (
    <View style={TodoEmptyStyle.emptyPanel}>
      <Text style={TodoEmptyStyle.emptyText}>No todo found</Text>
    </View>
  );
};

export default TodoEmptyState;
