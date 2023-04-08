import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function ButtonComponent ( {title} ) {
    return <>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
});
