import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import {useRoute} from '@react-navigation/native';
import Basket from './components/Basket';
import DefaultHeader from '../../components/DefaultHeader';
import useTexts from '../../hooks/useTexts';
import headerImage from '../../assets/produtores/header.png';

export default function EmployerDetailPage() {
  const route = useRoute();
  const {employerTitle, basketTitle} = useTexts();
  const {name, image, distance, rate, baskets} = route.params;

  const HeaderList = () => {
    return (
      <>
        <DefaultHeader title={employerTitle} height={150} />
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image source={image} style={styles.employerImage} />
            <Text style={styles.employer}>{name}</Text>
          </View>
          <Text style={styles.baskets}>{basketTitle}</Text>
        </View>
      </>
    );
  };

  return (
    <FlatList
      data={baskets}
      renderItem={({item}) => (
        <Basket {...item} employer={{name: name, image: image}} />
      )}
      style={styles.list}
      ListHeaderComponent={HeaderList}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  employerImage: {
    width: 62,
    height: 62,

    marginTop: -23,

    borderRadius: 6,
  },
  employer: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  baskets: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
});
