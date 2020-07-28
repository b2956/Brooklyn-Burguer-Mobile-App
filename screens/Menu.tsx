import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';


import MainItem from '../components/MainItem';
import MenuItem from '../components/MenuItem';

import menu from '../assets/data/menu';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Destaques & Promoções</Text>
      <ScrollView horizontal={true} style={styles.mainItemsContainer} showsHorizontalScrollIndicator={false} >
        {menu.hamburgers.filter(item => {
          if(item.main) {
            return item
          } 
        }).map((item, i) => {
          return (
            <MainItem 
              name={item.name}
              price={item.price}
              discount={item.discount}
              ingredients={item.ingredients}
              imgFile={item.imgFile}
              key={i}
            />
          )
        })}
      </ScrollView>
      <Text style={styles.title}>Hamburguers</Text>
        {
          menu.hamburgers.map((item, index) => {
            return (
              < MenuItem 
                name={item.name}
                ingredients={item.ingredients}
                discount={item.discount}
                imgFile={item.imgFile}
                price={item.price}
                key={index}
              />
            )
          })
        }
      <Text style={styles.title}>Combos</Text>
        {
          menu.combos.map((item, index) => {
            return (
              <MenuItem
                name={item.name}
                price={item.price}
                imgFile={item.imgFile}
                ingredients={item.ingredients}
                discount={item.discount}
                key={index}
              />
            )
          })
        }
      <Text style={styles.title}>Porções</Text>
        {
          menu.portions.map((item, index) => {
            return (
              <MenuItem
                name={item.name}
                price={item.price}
                imgFile={item.imgFile}
                ingredients={item.ingredients}
                discount={item.discount}
                key={index}
              />
            )
          })
        }
      <Text style={styles.title}>Molhos</Text>
        {
          menu.sauces.map((item, index) => {
            return (
              < MenuItem 
                name={item.name}
                ingredients={item.ingredients}
                discount={item.discount}
                imgFile={item.imgFile}
                price={item.price}
                key={index}
              />
            )
          })
        }
      <Text style={styles.title}>Bebidas</Text>
        {
          menu.drinks.map((item, index) => {
            return (
              < MenuItem 
                name={item.name}
                ingredients={item.ingredients}
                discount={item.discount}
                imgFile={item.imgFile}
                price={item.price}
                key={index}
              />
            )
          })
        }
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
    height: 340,
    marginLeft: 10
  }
});
