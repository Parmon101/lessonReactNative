import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';

const App: () => any = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
