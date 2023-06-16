import React from 'react';
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import HeaderDefaultImage from '../assets/topo.png';
// Config the file metro.config.js to import SVG files.
import ReturnSvg from '../assets/return.svg';

import TextComponent from './Text';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;
const DEFAULT_HEIGHT = 270;

export default function DefaultHeader({
  title,
  headerImage = HeaderDefaultImage,
  height = DEFAULT_HEIGHT,
}) {
  const navigation = useNavigation();
  const styles = stylesFunction(height);
  return (
    <>
      <Image source={headerImage} style={styles.header} />
      <TextComponent style={styles.title}>{title}</TextComponent>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.buttonReturn}>
        <ReturnSvg width={20} height={20} />
      </TouchableOpacity>
    </>
  );
}
// '../assets/return.svg'

const stylesFunction = (height) =>
  StyleSheet.create({
    header: {
      width: '100%',
      height: height,
    },
    gradient: {
      position: 'absolute',
    },
    title: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    buttonReturn: {
      position: 'absolute',
      padding: 17,
    },
    return: {
      width: 24,
      height: 24,
    },
  });
