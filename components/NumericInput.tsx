import React from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { NumericInputProps } from '../types';
 
const NumericInput = (props: NumericInputProps) => {
    const setQuantity = () => {

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={props.subtractQuantityOnPress} 
            >
                <Text>-</Text>
            </TouchableOpacity>
            <TextInput 
                value={`${props.quantity}`} 
                style={styles.input}
                keyboardType='numeric'
                onChange={(quantity) => {
                    props.setItemQuantity(quantity.nativeEvent.text)
                }}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={props.addQuantityOnPress}
            >
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1.5,
        textAlign: 'center',
        borderColor: '#999',
        marginHorizontal: 5,
        height: 30
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#f5f8f9',
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5.46,
        elevation: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NumericInput;