import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import TextComponent from '../../../components/Text';

export default function Basket({details, items, employer}) {
  const navigation = useNavigation();
  const {name, image, description, price} = details;

  return (
    <TouchableOpacity
      style={styles.basket}
      onPress={() =>
        navigation.navigate('Basket', {
          employer: employer,
          items: items,
          details: details,
        })
      }>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />

        <View style={styles.texts}>
          <TextComponent style={styles.name}>{name}</TextComponent>
          <TextComponent style={styles.description}>
            {description}
          </TextComponent>
          <TextComponent style={styles.price}>{price}</TextComponent>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  texts: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#A3A3A3',
    fontSize: 14,
    lineHeight: 22,
  },
  price: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
