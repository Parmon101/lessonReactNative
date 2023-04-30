import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Main from '../screens/Main';
import ProductList from '../screens/ProductList';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
};

export default Navigator;
