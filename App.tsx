import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CartContext from './context/CartContext';

import TopBar from './components/TopBar';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const reducer = (state: object, action: object) => {
  switch(action.type) {
    case 'ADD': 
      return state
    case 'REMOVE':
      return state
    default: 
      return state
  }  
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const initialCart = {
    cartItems : [

    ] 
  }

  const [cart, dispatch] = useReducer(reducer, initialCart);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <TopBar/>
        <CartContext.Provider value={cart} >
          <Navigation colorScheme={colorScheme} />
        </CartContext.Provider>
        <StatusBar/>
      </SafeAreaProvider>
    );
  }
}
