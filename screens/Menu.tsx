import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';

import { ModalItemProps } from '../types';

import MainItem from '../components/MainItem';
import MenuItem from '../components/MenuItem';
import ItemModal from '../components/ItemModal';
import Overlay from '../components/Overlay';

import menu from '../assets/data/menu';

export default function MenuScreen() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalItem , setModalItem] = useState({} as ModalItemProps);

  const showModalHandler = (product: ModalItemProps) => {
    setModalItem(product);
    setModalVisibility(true);
  }

  const hideModalHandler = () => {
    setModalVisibility(false);
    setModalItem({} as ModalItemProps);
  }

  return (
    <View style={styles.outsideContainer}>
      { modalVisibility &&
        <Overlay 
          modalVisibility={modalVisibility}
          hideModal={hideModalHandler}
        />
      }
      { modalVisibility &&
        <ItemModal
          item={modalItem}
          modalVisibility={modalVisibility}
          hideModal={hideModalHandler}
        />
      }
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
                hideModal={hideModalHandler}
                showModal={showModalHandler}
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
                  hideModal={hideModalHandler}
                  showModal={showModalHandler}
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
                  hideModal={hideModalHandler}
                  showModal={showModalHandler}
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
                  hideModal={hideModalHandler}
                  showModal={showModalHandler}
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
                  hideModal={hideModalHandler}
                  showModal={showModalHandler}
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
                  hideModal={hideModalHandler}
                  showModal={showModalHandler}
                />
              )
            })
          }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#f5f8f9'
  },
  title: {
    fontSize: 25,
    padding: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  mainItemsContainer: {
    height: 400,
    marginLeft: 10,
    marginTop: 10
  },
  outsideContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent'
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.6
  }
});
