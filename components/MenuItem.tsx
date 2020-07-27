import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { MenuItemProps } from '../types';


const MenuItem = (props: MenuItemProps) => {
    let price;

    if(props.price === null) {
        price = <Text style={styles.price}>Variável</Text>
    } else {
        if(props.discount === 0 ) {
            price = <Text style={styles.price}>R${(+props.price).toFixed(2)}</Text>
        } else {
            price = <View style={styles.priceWithDiscount}>
                <Text style={styles.oldPrice}>R${(+props.price).toFixed(2)}</Text>
                <Text style={styles.price}>R${(+props.price - (props.discount * +props.price)/ 100).toFixed(2)}</Text>
            </View>
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={props.imgFile} style={styles.img}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.ingredients}>
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
                <View style={styles.actionsContainer}>
                    {price}         
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ver Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 150,
        marginVertical: 2.5,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    imgContainer: {
        // flex: 2,
        width: 110,
        height: 110,
        overflow: 'hidden',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    img: {
        width: 130,
        height: 130
    },
    textContainer: {
        marginHorizontal: 10,
        flex: 1,
        height: '100%'
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10
    },
    ingredients: {
        color: '#999',
        textAlign: 'justify'
    },
    actionsContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceWithDiscount: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        flex: 1
    },
    price: {
        fontWeight: '700',
        color: 'green'
    },
    oldPrice: {
        color: '#999',
        textDecorationLine: 'line-through',
        marginRight: 5
    },
    button: {
        backgroundColor: '#008bc1',
        height: 30,
        width: 90,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        marginLeft: 5
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
    }
})

export default MenuItem;