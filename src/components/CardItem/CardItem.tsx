import * as React from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const CardItem = ({text, img, price}) => {
  console.log(img);

  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Вы выбрали', text)}
      style={s.btn}>
      <Image style={s.image} source={{uri: img}} />
      <Text>{text}</Text>
      <Text>{price}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  btn: {
    width: '50%',
  },
  image: {
    marginTop: 15,
    width: '100%',
    height: 180,
    borderRadius: 4,
  },
});
