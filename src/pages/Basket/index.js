import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderComponent from './components/Header';

import DetailsComponent from './components/Details';
import ItemsComponent from './components/items';
import {loadBasket, loadEmployers} from '../../services/loadData';

//index is the default object imported for the module Basket
export default function BasketPage({employer, items, details}) {

  return (
    <ScrollView>
      <HeaderComponent />
      <View style={styles.detailCard}>
        <DetailsComponent {...details} employer={employer} />
        <ItemsComponent {...items} />
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
