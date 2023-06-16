import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import EmployerComponent from './Employer';
import useEmployers from '../../../hooks/useEmployers';
import {useRoute} from '@react-navigation/native';
import TextComponent from '../../../components/Text';
import PurchasedProductComponent from './PurchasedProduct';

export default function EmployersComponent({
  bestEmployers: bestEmployers,
  header: Header,
}) {
  const route = useRoute();
  const [title, employersList] = useEmployers(bestEmployers);

  const purchasedProduct = route.params?.purchased;

  const listHeader = () => {
    return (
      <>
        <Header />
        <PurchasedProductComponent {...purchasedProduct} />
        <Text style={styles.title}>{title}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={employersList}
      renderItem={({item}) => <EmployerComponent {...item} />}
      keyExtractor={({name}) => name}
      ListHeaderComponent={listHeader}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
});
