import React, { useState, useContext } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import NumericInput from './NumericInput';

import { ItemModalProps, CartItemProps } from '../types';

import CartContext from '../context/CartContext';

const ItemModal = (props: ItemModalProps) => {
    const width = Dimensions.get('window').width * 0.5;
    // const height = 

    const [quantity, setQuantity] = useState(0);

    const addQuantityHandlerOnPress = () => {
        setQuantity(quantity + 1);
    }

    const subtractQuantityHandlerOnPress = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const { cartActions, cartItems } = useContext(CartContext);

    const product: CartItemProps = {
        discount: props.item.discount,
        ingredients: props.item.ingredients,
        name: props.item.name,
        price: +props.item.price,
        quantity
    }

    const addProduct = () => {
        if(quantity === 0) {
            return
        }
        
        const itemIndex = cartItems.findIndex(item => {
            return item.name === props.item.name
        });

        if(itemIndex > -1) {
            setQuantity(0);
            return cartActions.addQuantity(product);
        }

        cartActions.addProduct(product);

        return setQuantity(0);
    }

    return (
            <Modal
                animationType="slide"
                visible={props.modalVisibility}
                transparent={true}
                onRequestClose={props.hideModal}
            >
                <View style={styles.outsideContainer} >
                    <View style={styles.insideContainer}>
                        <View style={styles.headContainer}>
                            <Text style={styles.title}>{props.item.name}</Text>
                            <TouchableOpacity 
                                style={styles.closeButton}
                                onPress={props.hideModal}
                            >
                                <Text style={styles.closeButtonText}>&#10799;</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imgContainer}>
                            <Image source={props.item.imgFile} style={styles.img} />
                        </View>
                        <Text style={styles.ingredients}>
                            {
                                props.item.ingredients.reduce((acc: string, item: string, index: number): any =>  {
                                    return `${acc} + ${item}`
                                })
                            }
                        </Text>
                        <View style={styles.price}>
                            <Text style={{
                                color: '#999',
                                fontSize: 16
                            }}>De: </Text>
                            <Text style={styles.oldPrice}>R${(+props.item.price).toFixed(2)}</Text>
                            <Text style={{
                                fontSize: 16
                            }}>  Por: </Text>
                            <Text style={styles.newPrice}>R${(+props.item.price - (props.item.discount * +props.item.price)/ 100).toFixed(2)}</Text>
                        </View>
                        <View style={styles.addTooCart}>
                            <NumericInput 
                                addQuantityOnPress={addQuantityHandlerOnPress}
                                subtractQuantityOnPress={subtractQuantityHandlerOnPress}
                                quantity={quantity}
                            />
                            <TouchableOpacity 
                                style={styles.button}
                                onPress={addProduct}
                            >
                                <Text style={styles.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    outsideContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    insideContainer: {
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        height: '75%',
        width: '85%',
        marginHorizontal: 10,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.46,
        elevation: 9,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%'
    },
    title: {
        fontSize: 23,
        fontWeight: '700',
        margin: 0,
        alignSelf: 'center'
    },
    closeButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        // backgroundColor: '#f5f8f9',
        backgroundColor: '#008bc1',
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5.46,
        elevation: 9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    imgContainer: {
        width: 180,
        height: 150,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 20
    },
    img: {
        width: 180,
        height: 180
    },
    ingredients: {
        color: '#999',
        width: 230,
        textAlign: 'justify',
        fontSize: 16,
        minHeight: 100
    },
    price: {
        display: 'flex',
        width: 240,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    oldPrice: {
        color: '#999',
        textDecorationLine: 'line-through',
        fontSize: 16
    },
    newPrice: {
        fontWeight: '700',
        color: 'green',
        fontSize: 16
    },
    addTooCart: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: 240,
        flex: 1
    },
    button: {
        backgroundColor: '#008bc1', 
        height: 35,
        width: 100,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 5,
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
        fontWeight: '700',
        fontSize: 18
    },
    closeButtonText: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 25
    }
})

export default ItemModal;