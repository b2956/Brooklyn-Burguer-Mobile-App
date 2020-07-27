import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const TopBar = () => {
    // const logo = require('../assets/images/Logo-Brooklyn.png');

    return (
        <View style={styles.topbar} >
            {/* <Image source={logo} style={styles.logo} /> */}
            <Text style={styles.text} >Brooklyn Steak House</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topbar: {
        height: 100,
        backgroundColor: '#00ADEF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    // logo: {
    //     height: 50,
    //     width: 50
    // },
    text: {
        fontSize: 25,
        color: '#fff'
    }

});

export default TopBar