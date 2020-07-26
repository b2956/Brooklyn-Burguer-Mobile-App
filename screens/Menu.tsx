import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';


import MainItem from '../components/MainItem';


import menu from '../assets/data/menu';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Destaques & Promoções</Text>
      <ScrollView horizontal={true} style={styles.mainItemsContainer} showsHorizontalScrollIndicator={false} >
        {menu.map((item, i) => {
          return (
            <MainItem 
              name={item.name}
              price={item.price}
              discount={item.discount}
              ingredients={item.ingredients}
              key={i}
            />
          )
        })}
      </ScrollView>
      <Text style={styles.title}>Menu</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: '#f5f8f9'
  },
  title: {
    fontSize: 20,
    padding: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  mainItemsContainer: {
    height: 280
  }
});
