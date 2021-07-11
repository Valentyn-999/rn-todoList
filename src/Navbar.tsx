import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type PropsType = {
    title: string;
}

export const Navbar: React.FC<PropsType> = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: '#3949ab',
        paddingBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
})