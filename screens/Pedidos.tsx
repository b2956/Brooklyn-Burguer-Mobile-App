import React from  'react';
import {Text, View, StyleSheet} from 'react-native';

const Pedidos = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Pedidos</Text>
        </View>
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
    }
});

export default Pedidos;