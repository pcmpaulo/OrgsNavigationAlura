import React from 'react';

import {Dimensions, Image, StyleSheet} from 'react-native';
import TextComponent from '../../../components/Text';

// Import images
import topo from '../../../assets/topo.png';
import basket from '../../../mocks/basket';
import DefaultHeader from '../../../components/DefaultHeader';

// Get screen dimensions
const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

export default function HeaderComponent({title}) {
  return (
    <>
      <DefaultHeader title={basket.header.title} height={(578 / 768) * width} />
      {/*<TextComponent style={styles.title}>{basket.header.title}</TextComponent>*/}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 18,
    lineHeight: 36,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    paddingTop: 18,
    fontWeight: 'bold',
  },
});
