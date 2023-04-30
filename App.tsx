import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CardItem} from './src/components/CardItem';

const photoData = [
  {
    id: 1,
    name: 'Маргарита',
    price: 250,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e3f5dfcb094b4c9b8200ca9f573cb2f1_366x366.webp',
  },
  {
    id: 2,
    name: 'Маргарита',
    price: 200,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/d6c9f93ea37649ac923e9586c034a5a0_366x366.webp',
  },
  {
    id: 3,
    name: 'Маргарита',
    price: 300,
    img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e3f5dfcb094b4c9b8200ca9f573cb2f1_366x366.webp',
  },
];
const App: () => any = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor="#000"
        barStyle={false ? 'light-content' : 'dark-content'}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
      > */}
      <ScrollView style={s.container}>
        <Text style={s.view}>Магазин пиццы</Text>
        <Text>Описание {'\n'} 2 строки</Text>

        <View>
          <TextInput style={s.input} keyboardType="numeric" />
          {/* <SearchIcon /> */}
        </View>

        <View style={s.imageContainer}>
          {photoData.map(element => {
            return (
              <CardItem
                key={element.id}
                text={element.name}
                img={element.img}
                price={element.price}
              />
            );
          })}
        </View>

        <TouchableOpacity style={s.orderBttnContainer}>
          <Text style={s.orderBtnText}>Создать заказ</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    marginBottom: 4,
  },
  view: {
    fontSize: 24,
    fontWeight: '600',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    marginTop: 15,
    width: '50%',
    height: 180,
    borderRadius: 4,
  },
  orderBttnContainer: {
    marginTop: 15,
    marginBottom: 30,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: 'orange',
    borderRadius: 8,
  },
  orderBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    marginTop: 12,
    paddingLeft: 12,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: 'orange',
  },
});

export default App;
