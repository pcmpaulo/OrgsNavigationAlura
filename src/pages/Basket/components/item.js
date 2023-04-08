import React from "react";
import {Image, StyleSheet, View} from "react-native";

import TextComponent from "../../../components/Text";


export default function ItemComponent ( {name, image} ) {
    return <View style={styles.item}>
        <Image source={image} style={styles.image}/>
        <TextComponent style={styles.text}>{name}</TextComponent>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems: 'center'
    },
    image: {
        width: 46,
        height: 46
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646'
    }
});
