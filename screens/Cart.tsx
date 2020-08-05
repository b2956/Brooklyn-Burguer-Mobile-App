import React, { useContext, useState } from  'react';
import {Text, ScrollView, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import CartItem from '../components/CartItem';
import EndBuyModal from '../components/EndBuyModal';
import Overlay from '../components/Overlay';

import CartContext from '../context/CartContext';
import OrdersContext from '../context/OrdersContext';
import { CartItemProps, OrderItem, OrderProps, OrderAdress, Location } from '../types';

const Cart = () => {
    const cart = useContext(CartContext);
    const [ modalVisibility, setModalVisibility ] = useState(false);

    const orders = useContext(OrdersContext);

    const addOrder = (adress: OrderAdress, location: Location) => {
        const orderItems = cart.cartItems.reduce((acc: OrderItem[], item: CartItemProps) => {
            return [
                ...acc,
                {
                    name: item.name,
                    quantity: item.quantity,
                    price: +item.price - (+item.price * item.discount / 100)
                }
            ]
        }, []);

        const orderTotal = orderItems.reduce((acc: number, item) => {
            return item.price * item.quantity + acc
        }, 0)

        const newOrder: OrderProps = {
            id: +(Math.random()* 10000).toFixed(0),
            orderItems: orderItems,
            timeStamp:  new Date,
            total: orderTotal,
            status: 'pending',
            adress: adress,
            location: location
        }

        orders.addOrder(newOrder);

        hideModal();

        cart.cartActions.emptyCart();
    }

    const hideModal = () => {
        setModalVisibility(false);
    }

    const showModal = () => {
        setModalVisibility(true);
    }

    const total = 
    <Text style={styles.totalTitle}>
        R$ {
            cart.cartItems.reduce((acc, item): any => {
                return (((+item.price - (+item.price * item.discount / 100)) * item.quantity) + +acc).toFixed(2)
            }, 0)
        }
    </Text>

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={{
                alignItems: 'center'
            }}
        >
            <Text style={styles.title} >Carrinho</Text>
            { modalVisibility && 
                <Overlay
                    hideModal={hideModal}
                    modalVisibility={modalVisibility}
                />
            }
            { modalVisibility && 
                <EndBuyModal
                    modalVisibility={modalVisibility}
                    hideModal={hideModal}
                    showModal={showModal}
                    addOrder={addOrder}
                />
            }
            {cart.cartItems.length > 0 &&
                cart.cartItems.map((item, index) => {
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
            {cart.cartItems.length > 0 &&
                <View style={{
                    alignItems: 'center'
                }}>
                    <View style={styles.totalContainer} >
                        <Text style={styles.total}>
                            Total da Compra:
                        </Text>
                        {total}
                    </View>
                    <TouchableOpacity 
                        style={styles.buyButton}
                        onPress={showModal}
                    >
                        <Text style={styles.buyButtonText} >
                            Pedir Já!
                        </Text>
                    </TouchableOpacity>
                </View>
            }

            {cart.cartItems.length === 0 &&
                <View style={styles.emptyCartContainer}>
                    <Text style={styles.emptyCart}>
                        Nenhum item no carrinho...
                    </Text>
                </View>
            }
            
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
    },
    emptyCart: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#555',
        marginRight: 10
    },
    emptyCartContainer: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Cart;