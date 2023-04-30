import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Main = () => {
  const navigation = useNavigation();

  const handleNavigationToScreen = () => {
    navigation.navigate('ProductList');
  };

  return (
    <View>
      <TouchableOpacity>
        <Text onPress={() => handleNavigationToScreen()}>Перейти в лист</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
