import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import TextComponent from '../../../components/Text';
import ButtonComponent from '../../../components/Button';
import { useNavigation } from "@react-navigation/native";


export default function DetailsComponent({
  farmLogo,
  name,
  farmName,
  description,
  price,
  buttonLabel,
  employer,
}) {
  const navigation = useNavigation();
  function buyNow() {
    navigation.navigate('Home', {purchased: {name: name}});
  }

  return (
    <>
      <TextComponent style={styles.detailCardTitle}>{name}</TextComponent>
      <View style={styles.farmResume}>
        <Image source={employer.image} style={styles.detailCardImage} />
        <TextComponent style={styles.detailCardFarmName}>
          {employer.name}
        </TextComponent>
      </View>
      <TextComponent style={styles.detailCardDescription}>
        {description}
      </TextComponent>
      <TextComponent style={styles.detailCardPrice}>{price}</TextComponent>
      <ButtonComponent title={buttonLabel} onPressCall={buyNow} />
    </>
  );
}

const styles = StyleSheet.create({
  detailCardTitle: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farmResume: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  detailCardImage: {
    width: 32,
    height: 32,
  },
  detailCardFarmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  detailCardDescription: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  detailCardPrice: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 42,
    marginTop: 8,
  },
});
