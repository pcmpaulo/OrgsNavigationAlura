import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from './components/Header';

import DetailsComponent from './components/Details';
import ItemsComponent from './components/items';
import {useRoute} from '@react-navigation/native';

//index is the default object imported for the module Basket
export default function BasketPage() {
  const route = useRoute();
  const {employer, items, details} = route.params;

  return (
    <ScrollView>
      <HeaderComponent />
      <View style={styles.detailCard}>
        <DetailsComponent
          {...details}
          employer={employer}
          buttonLabel={'Buy now'}
        />
        <ItemsComponent title="Itens da Cesta" productList={items} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  detailCard: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
