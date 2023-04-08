import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import StarComponent from './Star';

export default function StarsComponent({
  quantity: actualQuantity,
  editable = false,
  focus = false,
}) {
  const [quantity, setQuantity] = useState(actualQuantity);

  const RenderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarComponent
          key={i}
          index={i}
          onPress={() => setQuantity(i + 1)}
          filled={i < quantity}
          disabled={!editable}
          focus={focus}
        />,
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <RenderStars />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
