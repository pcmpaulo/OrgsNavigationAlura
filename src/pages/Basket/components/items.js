import React from "react";
import {FlatList, Image, StyleSheet, View} from "react-native";

import TextComponent from "../../../components/Text";
import ItemComponent from "./item";

// To improve list performance we need to use FlatList but for a flat list the page need to be refactored
export default function ItemsComponent ( {title, productList} ) {
    return <>
        <TextComponent style={styles.detailCard}>{title}</TextComponent>
        {
            productList.map(({name, image}) => {return <ItemComponent key={name} name={name} image={image}/>})
        }
    </>
}

const styles = StyleSheet.create({
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    }
});
