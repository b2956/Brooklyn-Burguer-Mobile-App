import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { MainItemParams } from '../types';

const MainItem = (props: MainItemParams)  => {

    return (
        <View style={ styles.container }>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 250,
        width: 200,
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.46,
        elevation: 9,
    }
})

export default MainItem