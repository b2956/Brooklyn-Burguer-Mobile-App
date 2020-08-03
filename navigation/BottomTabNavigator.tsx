import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Menu from '../screens/Menu';
import Orders from '../screens/Orders';
import Chat from '../screens/Chat';
import Cart from '../screens/Cart';
import { BottomTabParamList, MenuParamList, OrdersParamList, ChatParamList, CartParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Menu"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].tint,
        keyboardHidesTabBar: true
      }}>
      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-chatbubbles" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Pedidos"
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-clipboard" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-cart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MenuStack = createStackNavigator<MenuParamList>();

function MenuNavigator() {
  return (
    < MenuStack.Navigator>
      < MenuStack.Screen
        name="MenuScreen"
        component={Menu}
        options={{ headerTitle: 'Menu' }}
      />
    </ MenuStack.Navigator>
  );
}

const OrdersStack = createStackNavigator<OrdersParamList>();

function OrdersNavigator() {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="OrdersScreen"
        component={Orders}
        options={{ headerTitle: 'Orders' }}
      />
    </OrdersStack.Navigator>
  );
}

const ChatStack = createStackNavigator<ChatParamList>();

function ChatNavigator() {
  <ChatStack.Navigator>
    <ChatStack.Screen
      name="ChatScreen"
      component={Chat}
      options={{ headerTitle: 'Chat'}}
    />
  </ChatStack.Navigator>
}

const CartStack = createStackNavigator<CartParamList>();

function CartNavigation() {
  <CartStack.Navigator>
    <CartStack.Screen
      name="CartScreen"
      component={Cart}
      options={{ headerTitle: 'Carrinho'}}
    />
  </CartStack.Navigator>
}
