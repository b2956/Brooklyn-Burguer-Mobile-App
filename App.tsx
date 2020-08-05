import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CartContext from './context/CartContext';
import OrdersContext from './context/OrdersContext';

import TopBar from './components/TopBar';
import Navigation from './navigation';

import { CartState, ReducerAction, CartItemProps, OrderProps, CartActionPayload } from './types';

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

      newState.cartItems[itemIndex].quantity = +newState.cartItems[itemIndex].quantity + action.payload.item.quantity;

      return newState
    case 'ADD_PRODUCT_QUANTITY_BY_ONE':
      newState = {
        ...state
      }
  
      itemIndex = newState.cartItems.findIndex(item => {
        return item.name === action.payload.item.name
      })
  
      newState.cartItems[itemIndex].quantity = +newState.cartItems[itemIndex].quantity + 1;
  
      return newState
    case 'SUBTRACT_PRODUCT_QUANTITY': 
      newState = {
        ...state
      }

      itemIndex = newState.cartItems.findIndex(item => {
        return item.name === action.payload.item.name
      })

      newState.cartItems[itemIndex].quantity = +newState.cartItems[itemIndex].quantity - 1;

      if(newState.cartItems[itemIndex].quantity === 0) {
        newState.cartItems.splice(itemIndex, 1);
      }

      return newState
    case 'SET_ITEM_QUANTITY':
      newState = {
        ...state
      }

      itemIndex = newState.cartItems.findIndex(item => {
        return item.name === action.payload.item.name
      })

      newState.cartItems[itemIndex].quantity = +action.payload.item.quantity;

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
    case 'EMPTY_CART': 
      newState = {
        ...state,
        cartItems: []
      }

      return newState;
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
      addQuantityByOne: addCartProductQuantityByOne,
      subtractQuantity: subtractCartProductQuantity,
      removeProduct: removeProductFromCart,
      emptyCart: emptyCart,
      setItemQuantity: setCartItemQuantity
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
      }
    })
  }

  function addCartProductQuantityByOne (product: CartItemProps):any {
    dispatch({
      type: 'ADD_PRODUCT_QUANTITY_BY_ONE',
      payload: {
        item: product,
      }
    })
  }

  function subtractCartProductQuantity (product: CartItemProps):any {
    dispatch({
      type: 'SUBTRACT_PRODUCT_QUANTITY',
      payload: {
        item: product,
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

  function setCartItemQuantity (product: CartItemProps) {
    dispatch({
      type: 'SET_ITEM_QUANTITY',
      payload: {
        item: product,
      }
    })
  }

  function emptyCart () {
    dispatch({
      type: 'EMPTY_CART',
      payload: {} as CartActionPayload
    })
  }

  const [activeOrder, setActiveOrder] = useState({} as OrderProps)
  
  const addOrder = (order: OrderProps) => {
    console.log(order);
    setActiveOrder({
      ...order
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
          <OrdersContext.Provider value={{
            activeOrder: activeOrder,
            addOrder: addOrder
          }} >
            <Navigation 
              colorScheme={colorScheme}
            />
          </OrdersContext.Provider>
        </CartContext.Provider>
        <StatusBar/>
      </SafeAreaProvider>
    );
  }
}
