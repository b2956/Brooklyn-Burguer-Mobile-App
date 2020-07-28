import React from  'react';
import {Text, ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';

import CartItem from '../components/CartItem';

import cart from '../assets/data/cart';

const Cart = () => {
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={{
                alignItems: 'center'
            }}
        >
            <Text style={styles.title} >Carrinho</Text>
            {
                cart.map((item, index) => {
                    return (
                        < CartItem 
                            name={item.name}
                            price={+item.price}
                            quantity={item.quantity}
                            ingredients={item.ingredients}
                            discount={item.discount}
                            key={index}
                        />
                    )
                })
            }
            <View style={styles.totalContainer} >
                <Text style={styles.total}>Total da Compra:</Text>
                <Text style={styles.totalTitle}>
                    R$ {
                        cart.reduce((acc, item): any => {
                            return (((+item.price - (+item.price * item.discount / 100)) * item.quantity) + +acc).toFixed(2)
                        }, 0)
                    }
                </Text>
            </View>
            <TouchableOpacity style={styles.buyButton} >
                <Text style={styles.buyButtonText} >
                    Pedir Já!
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: '#f5f8f9',
    },
    title: {
      fontSize: 20,
      padding: 20,
      fontWeight: 'bold',
      color: '#333'
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 10
    },
    totalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    buyButton: {
        backgroundColor: '#008bc1',
        height: 35,
        width: 100,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: 30,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 1,
    },
    buyButtonText: {
        color: '#fff',
        fontWeight: '700'
    }
});

export default Cart;