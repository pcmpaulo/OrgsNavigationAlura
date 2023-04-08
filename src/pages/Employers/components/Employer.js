import React, { useMemo, useReducer, useState } from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StarsComponent from '../../../components/Stars';

const formatDistance = distance => {
  return `${distance}m`;
};

export default function EmployerComponent({name, image, distance, rate}) {
  const [focus, invertFocus] = useReducer(focus => !focus, false);

  // useMemo allow to reload formattedDistance only if {distance} change
  const formattedDistance = useMemo(() => formatDistance(distance), [distance]);

  return (
    <TouchableOpacity style={styles.component} onPress={invertFocus}>
      <Image style={styles.image} source={image} accessibilityLabel={name} />
      <View style={styles.details}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <StarsComponent quantity={rate} editable={focus} focus={focus} />
        </View>
        <Text style={styles.distance}>{formattedDistance}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',

    // Shadow for android
    elevation: 4,

    // Shadow for IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  }
});
