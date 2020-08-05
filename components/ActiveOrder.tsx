import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { OrderProps } from '../types';

const ActiveOrder = (props: OrderProps) => {
    let status, statusStyle;

    const changeStatus = (propsStatus: string) => {
        switch(propsStatus) {
            case 'pending':
                status = 'Aguardando aprovação';
                statusStyle = styles.statusTextPending;
                break
            case 'aproved': 
                status = 'Pedido sendo prepadado';
                statusStyle = styles.statusTextAproved;
                break
            case 'done':
                status = 'Aguardando saída para entrega';
                statusStyle = styles.statusTextPending;
                break
            case 'leaving':
                status = 'Pedido saiu para entrega';
                statusStyle = styles.statusTextAproved;
                break
            default: 
                status = 'Aguardando aprovação';
                statusStyle = styles.statusTextPending;
        }
    }

    console.log(props.adress);

    changeStatus(props.status); 
    
    useEffect(() => {
        changeStatus(props.status);
    }, [props.status]);    

    return (
        <View style={styles.container}>
            <View style={styles.orderNumberContainer}>
                <Text style={styles.order}>Pedido nº: </Text>
                <Text style={styles.orderNumber}>{props.id}</Text>
            </View>
            <Text style={styles.boldText}>
                Items:
            </Text>
            {
                props.orderItems.map((item, index) => {
                    return (
                        <View style={styles.itemsContainer} key={index}>
                            <Text style={styles.grayText}>{item.quantity} x {item.name}: </Text>
                            <Text style={styles.grayText}>R${item.price}</Text>
                        </View>
                    )
                })
            }
            <View style={styles.titleContainer}>
                <Text style={styles.boldText}>Total: </Text>
                <Text>R${props.total.toFixed(2)}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.boldText}>Endereço: </Text>
                <Text>{props.adress.street}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.boldText}>Status: </Text>
                <Text
                    style={statusStyle}
                >
                    {status}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        minHeight: 150,
        marginVertical: 2.5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    orderNumberContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#00ADEF',
        borderRadius: 5,
        padding: 5,
        marginVertical: 5
    },
    order: {
        fontWeight: '700',
        fontSize: 22,
        color: '#fff'
    },
    orderNumber: {
        fontSize: 22,
        color: '#fff'
    },
    itemsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
        paddingLeft: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5
    },
    boldText: {
        fontWeight: '700',
        fontSize: 18
    },
    statusTextPending: {
        fontWeight: '700',
        fontSize: 18,
        color: 'orange'
    },
    statusTextAproved: {
        fontWeight: '700',
        fontSize: 18,
        color: 'green'
    },
    grayText: {
        color: '#999'
    }
})

export default ActiveOrder;