import React from "react";
import {StyleSheet, Text} from "react-native";

// children get the content between tags on this uses
// style get the style applied in this component in his uses
export default function TextComponent ( {children, style} ) {
    let defaultStyle = styles.regular
    if (style && style.fontWeight === 'bold') {
        defaultStyle = styles.bold
    }
    return <Text style={[style, defaultStyle]}>{children}</Text>
}

const styles = StyleSheet.create({
    regular: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    bold: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    },
});