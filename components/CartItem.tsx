import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { CartItemProps } from '../types';

import NumericInput from './NumericInput';

const CartItem = (props: CartItemProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer} >
                <Text style={styles.title} >{props.name}</Text>
                <View style={styles.priceContainer}>
                    <Text >Total: </Text>
                    <Text style={styles.price} >R${((props.price - props.price * props.discount / 100) * props.quantity).toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.bodyContainer} >
                <Text style={styles.descriptionContainer} >
                    {
                        props.ingredients.reduce((acc: string, item: string, index: number): any =>  {
                            if(acc.length < 70) {
                                return `${acc} + ${item}`
                            } else if(acc.length >= 70 && (index + 1) !== props.ingredients.length) {
                                return `${acc}`
                            } else if ((index + 1) === props.ingredients.length) {
                                return `${acc} ...`
                            }
                        })
                    }
                </Text>
                <View style={styles.buttonsContainer} >
                    <NumericInput 
                        quantity={props.quantity}
                    />
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Remover</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginVertical: 2.5,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    title: {
        fontWeight: '700'
    },
    priceContainer: {
        flexDirection: 'row'
    },
    price: {
        color: 'green',
        fontWeight: '700'
    },
    bodyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    descriptionContainer: {
        width: 150,
        color: '#999',
        textAlign: 'justify'
    },
    input: {
        height: 50
    },
    buttonsContainer: {
        justifyContent: 'space-between',
        paddingTop: 10,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#e55353',
        width: '85%',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700'
    }    
})

export default CartItem;