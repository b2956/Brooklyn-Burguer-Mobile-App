import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { MessageProps } from '../types';

const Message = (props: MessageProps) => {
    let containerStyle, textStyle;
    
    props.userId === '1' ? containerStyle = 'storeContainer' : containerStyle = 'clientContainer';
    props.userId === '1' ? textStyle = 'storeText' : textStyle = 'clientText';

    return (
        <View style={styles[containerStyle]} >
            <Text style={styles[textStyle]}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    storeContainer: {
        backgroundColor: '#008bc1',
        // '#00ADEF',
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
        padding: 5,
        borderRadius: 5,
        maxWidth: 250
    },
    clientContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginRight: 10,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
        padding: 5,
        borderRadius: 5,
        maxWidth: 250,
        
    },
    storeText: {
        color: '#fff',
    },
    clientText: {
        alignSelf: 'flex-end'
    }
})

export default Message;