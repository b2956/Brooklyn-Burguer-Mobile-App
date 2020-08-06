import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TouchableWithoutFeedback  } from 'react-native';

import { MainItemProps, CartItemProps } from '../types';

import CartContext from '../context/CartContext';

import NumericInput from './NumericInput';

const MainItem = (props: MainItemProps)  => {
    const [quantity, setQuantity] = useState(0);

    const addQuantityHandlerOnPress = () => {
        setQuantity(quantity + 1);
    }

    const subtractQuantityHandlerOnPress = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const setItemQuantity = (value: number) => {
        setQuantity(value);
    }

    const { cartActions, cartItems } = useContext(CartContext);

    const product: CartItemProps = {
        discount: props.discount,
        ingredients: props.ingredients,
        name: props.name,
        price: +props.price,
        quantity
    }

    const addProduct = () => {
        if(quantity === 0) {
            return
        }
        
        const itemIndex = cartItems.findIndex(item => {
            return item.name === props.name
        });

        if(itemIndex > -1) {
            setQuantity(0);
            return cartActions.addQuantity(product);
        }

        cartActions.addProduct(product);

        return setQuantity(0);
    }

    const showModal = () => {
        props.showModal({
            ...product,
            imgFile: props.imgFile
        });
    }

    const hideModal = () => {
        props.hideModal();
    }

    return (
        <View style={ styles.container }>
            <Text style={styles.title}>{props.name}</Text>
            <TouchableWithoutFeedback onPress={showModal}>
                <View style={styles.imgContainer}>
                    <Image 
                        source={props.imgFile} 
                        style={styles.img}
                    />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={showModal}>
                <Text style={styles.ingredients}>
                    {
                        props.ingredients.reduce((acc: string, item: string, index: number): any =>  {
                            if(acc.length < 50) {
                                return `${acc} + ${item}`
                            } else if(acc.length >= 50 && (index + 1) !== props.ingredients.length) {
                                return `${acc}`
                            } else if ((index + 1) === props.ingredients.length) {
                                return `${acc} ...`
                            }
                        })
                    }
                </Text>
            </TouchableWithoutFeedback>
            <View style={styles.price}>
                <Text style={{color: '#999', fontSize: 16}}>De: </Text>
                <Text style={styles.oldPrice}>R${props.price}</Text>
                <Text style={styles.plainText}>  Por: </Text>
                <Text style={styles.newPrice}>R${(+props.price - (props.discount * +props.price)/ 100).toFixed(2)}</Text>
            </View>
            <View style={styles.addTooCart}>
                <NumericInput 
                    addQuantityOnPress={addQuantityHandlerOnPress}
                    subtractQuantityOnPress={subtractQuantityHandlerOnPress}
                    quantity={quantity}
                    setItemQuantity={setItemQuantity}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={addProduct}
                >
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 400,
        width: 250,
        marginHorizontal: 10,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.46,
        elevation: 9,
        overflow: 'hidden',
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imgContainer: {
        width: 180,
        height: 180,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        // borderWidth: 10,
        // borderColor: '#7fd6f7',

    },
    img: {
        width: 180,
        height: 180
    },
    ingredients: {
        color: '#999',
        width: 220,
        textAlign: 'justify',
        marginVertical: 10,
        fontSize: 16
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 10
    },
    price: {
        display: 'flex',
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
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
    plainText: {
        fontSize: 18
    },
    addTooCart: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        width: 220
    },
    button: {
        backgroundColor: '#008bc1', 
        height: 30,
        width: 80,
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
        fontWeight: '700'
    }
})

export default MainItem