import {View} from 'react-native';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';
import {TodoFilterStyle} from '../../styles';
import FilterTodoItem from './FilterTodoItem';

const FilterTodo = (): JSX.Element => {
  const {setFilterBy, filterBy} = useTodo() as TodoContextProps;
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
  const {
    filterWrapper: filterWrapperStyle,
  } = TodoFilterStyle;
  return (
    <View style={filterWrapperStyle}>
      {filterButtons.map(filter => (
        <FilterTodoItem key={filter.code} filter={filter}/>
      ))}
    </View>
  );
};

export default FilterTodo;
