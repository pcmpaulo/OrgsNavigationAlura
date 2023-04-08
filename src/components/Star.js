import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import star from '../assets/estrela.png';
import grayStar from '../assets/estrelaCinza.png';

export default function StarComponent({
  onPress,
  filled,
  disabled = false,
  focus = false,
}) {
  const styles = functionStyle(focus);

  const getImage = () => {
    if (filled) {
      return star;
    }
    return grayStar;
  };

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <Image style={styles.star} source={getImage()} />
    </TouchableOpacity>
  );
}

const functionStyle = focus =>
  StyleSheet.create({
    star: {
      width: focus ? 36 : 12,
      height: focus ? 36 : 12,
      marginRight: 2,
    },
  });
