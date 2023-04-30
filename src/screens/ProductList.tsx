import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {CardItem} from '../components/CardItem';

interface Product {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number[];
  category: number;
  rating: number;
}

const ProductList: () => any = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Product[]>([]);

  const [text, setText] = React.useState('');

  const getProduct = async () => {
    try {
      const response = await fetch(
        'https://62921194cd0c91932b6ccbee.mockapi.io/moroz',
      );
      const json = await response.json();

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);

  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor="#000"
        barStyle={false ? 'light-content' : 'dark-content'}
      />
      <ScrollView style={s.container}>
        <Text style={s.view}>Магазин пиццы</Text>
        <Text>Описание {'\n'} 2 строки</Text>

        <View>
          <TextInput
            style={s.input}
            keyboardType="numeric"
            onChangeText={(event: string) => setText(event)}
            value={text}
          />
        </View>

        {isLoading ? (
          <ActivityIndicator style={{marginTop: 12}} />
        ) : (
          <View style={s.imageContainer}>
            {data.map(element => {
              return (
                <CardItem
                  key={element.id}
                  text={element.title}
                  img={element.imageUrl}
                  price={element.price[1]}
                />
              );
            })}
          </View>
        )}

        <TouchableOpacity style={s.orderBttnContainer}>
          <Text style={s.orderBtnText}>Создать заказ</Text>
        </TouchableOpacity>
      </ScrollView>
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

export default ProductList;
