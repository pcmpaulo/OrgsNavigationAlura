import React from 'react';

import {Dimensions, Image, StyleSheet} from 'react-native';
import TextComponent from '../../../components/Text';

// Import images
import topo from '../../../assets/topo.png';
import basket from "../../../mocks/basket";

// Get screen dimensions
const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

export default function HeaderComponent ( {title} ) {
    return <>
        <Image source={topo} style={styles.backgroundImage}/>
        <TextComponent style={styles.title}>{ basket.header.title }</TextComponent>
    </>
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: 578 / 768 * width
    },
    title: {
        color: 'white',
        fontSize: 18,
        lineHeight: 36,
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        paddingTop: 18,
        fontWeight: 'bold'
    }
});
