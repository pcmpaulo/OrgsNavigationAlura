import React, { useEffect, useState } from "react";
import {StyleSheet} from 'react-native';
import TextComponent from "../../../components/Text";

export default function PurchasedProductComponent({name}) {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setShowMessage(name);
    let timeout;

    if (name) {
      timeout = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }, [name]);

  if (!showMessage) {
    return;
  }
  return (
    <>
      <TextComponent style={styles.container}>
        Thanks to buy the basket {name}, your product will be delivered soon!
      </TextComponent>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,
  },
});
