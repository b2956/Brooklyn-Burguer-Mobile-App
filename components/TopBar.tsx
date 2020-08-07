import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const TopBar = () => {
    const logo = require('../assets/images/Logo-Brooklyn.png');

    return (
        <View style={styles.topbar} >
            <Image source={logo} style={styles.logo} />
            <Text style={styles.text} >Brooklyn Burguer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topbar: {
        height: 90,
        backgroundColor: '#00ADEF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 20,
        width: '100%'
    },
    logo: {
        height: 50,
        width: 70,
        marginRight: 20
    },
    text: {
        fontSize: 26,
        fontWeight: '700', 
        color: '#fff'
    }
});

export default TopBar