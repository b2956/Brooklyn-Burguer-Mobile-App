import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CartContext from './context/CartContext';

import TopBar from './components/TopBar';
import Navigation from './navigation';

import { CartState, ReducerAction, CartItemProps } from './types';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

const reducer = (state: CartState, action: ReducerAction) => {
  let newState, itemIndex;

  switch(action.type) {
    case 'ADD_NEW_PRODUCT':
      newState = {
        ...state
      }

      newState.cartItems.push(action.payload.item)

      return newState
    case 'ADD_PRODUCT_QUANTITY':
      newState = {
        ...state
      }

      itemIndex = newState.cartItems.findIndex(item => {
        return item.name === action.payload.item.name
      })

      if(action.payload.add) {
        newState.cartItems[itemIndex].quantity = newState.cartItems[itemIndex].quantity + action.payload.add
      }   

      return newState
    case 'SUBTRACT_PRODUCT_QUANTITY': 
      newState = {
        ...state
      }

      itemIndex = newState.cartItems.findIndex(item => {
        return item.name === action.payload.item.name
      })

      newState.cartItems[itemIndex].quantity = newState.cartItems[itemIndex].quantity - 1;

      if(newState.cartItems[itemIndex].quantity === 0) {
        newState.cartItems.splice(itemIndex, 1);
      }

      return newState
    case 'REMOVE_PRODUCT':
      newState = {
        ...state
      }

      itemIndex = newState.cartItems.findIndex(item => {
        return item.name === action.payload.item.name
      })

      newState.cartItems.splice(itemIndex, 1);

      return newState
    default: 
      return state
  }  
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const initialCartState = {
    cartItems : [],
    cartActions:  {
      addProduct: addNewProductToCart,
      addQuantity: addCartProductQuantity,
      subtractQuantity: subtractCartProductQuantity,
      removeProduct: removeProductFromCart
    }
  }

  const [cart, dispatch] = useReducer(reducer, initialCartState, );

  function addNewProductToCart (product: CartItemProps):any {
    dispatch({
      type: 'ADD_NEW_PRODUCT',
      payload: {
        item: product
      }
    })
  }

  function addCartProductQuantity (product: CartItemProps):any {
    dispatch({
      type: 'ADD_PRODUCT_QUANTITY',
      payload: {
        item: product,
        add: product.quantity
      }
    })
  }

  function subtractCartProductQuantity (product: CartItemProps):any {
    dispatch({
      type: 'SUBTRACT_PRODUCT_QUANTITY',
      payload: {
        item: product,
        add: product.quantity
      }
    })
  }

  function removeProductFromCart (product: CartItemProps):any {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: {
        item: product
      }
    })
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TopBar/>
        <CartContext.Provider value={{
          cartActions: cart.cartActions,
          cartItems: cart.cartItems
        }} >
          <Navigation 
            colorScheme={colorScheme}
          />
        </CartContext.Provider>
        <StatusBar/>
      </SafeAreaProvider>
    );
  }
}
