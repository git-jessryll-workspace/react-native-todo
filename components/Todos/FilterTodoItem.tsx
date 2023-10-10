import {FC} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {TodoContextProps, useTodo} from '../../context/TodoProvider';
import {TodoFilterItemStyle} from '../../styles';

const FilterTodoItem: FC<{
  filter: {code: string; name: string};
  filterBy: string;
}> = ({filter, filterBy}) => {
  const {setFilterBy} = useTodo() as TodoContextProps;
  const {
    buttonWrapper: filterButtonWrapperStyle,
    activeBg: filterActiveBgStyle,
    inActiveBg: filterInActiveBgStyle,
    textWrapper: filterTextWrapperStyle,
    activeText: filterActiveTextStyle,
    inActiveText: filterInActiveTextStyle,
  } = TodoFilterItemStyle;
  return (
    <TouchableHighlight
      style={{marginRight: 8}}
      onPress={() => setFilterBy(filter.code)}
      key={filter.code}>
      <View
        style={[
          filterButtonWrapperStyle,
          filterBy === filter.code
            ? filterActiveBgStyle
            : filterInActiveBgStyle,
        ]}>
        <Text
          style={[
            filterTextWrapperStyle,
            filterBy === filter.code
              ? filterActiveTextStyle
              : filterInActiveTextStyle,
          ]}>
          {filter.name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default FilterTodoItem;
