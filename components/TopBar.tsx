import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopBar = () => {
    return (
        <View style={styles.topbar}>
            <Text style={styles.text} >Brooklyn Hamburgueria</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topbar: {
        height: 80,
        backgroundColor: '#00ADEF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    text: {
        fontSize: 25,
        color: '#fff'
    }

});

export default TopBar