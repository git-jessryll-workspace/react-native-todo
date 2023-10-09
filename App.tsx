import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TodoProvider from './context/TodoProvider';
import TodoPage from './pages/TodoPage';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TodoProvider>
        <TodoPage />
      </TodoProvider>
    </SafeAreaView>
  );
}

export default App;
