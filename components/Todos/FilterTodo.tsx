import {View} from 'react-native';
import {TodoFilterStyle} from '../../styles';
import FilterTodoItem from './FilterTodoItem';
import {FC, memo} from 'react';
const filterButtons = [
  {
    name: 'All',
    code: 'all',
  },
  {
    name: 'Active',
    code: 'active',
  },
  {
    name: 'Done',
    code: 'done',
  },
];

const FilterTodo: FC<{filterBy: string}> = ({filterBy}): JSX.Element => {
  const {filterWrapper: filterWrapperStyle} = TodoFilterStyle;

  return (
    <View style={filterWrapperStyle}>
      {filterButtons.map(filter => (
        <FilterTodoItem key={filter.code} filter={filter} filterBy={filterBy} />
      ))}
    </View>
  );
};

export default memo(FilterTodo);
