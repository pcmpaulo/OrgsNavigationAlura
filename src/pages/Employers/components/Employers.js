import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import EmployerComponent from './Employer';
import useEmployers from '../../../hooks/useEmployers';

export default function EmployersComponent({header: Header}) {
  const [title, employersList] = useEmployers();

  const listHeader = () => {
    return (
      <>
        <Header />
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
