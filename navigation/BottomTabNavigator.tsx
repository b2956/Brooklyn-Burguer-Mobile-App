import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Menu from '../screens/Menu';
import Pedidos from '../screens/Pedidos';
import Chat from '../screens/Chat';
import Carrinho from '../screens/Carrinho';
import { BottomTabParamList, MenuParamList, PedidosParamList, ChatParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Menu"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-clipboard" color={color} />,
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
        name="Carrinho"
        component={Carrinho}
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

const PedidosStack = createStackNavigator<PedidosParamList>();

function PedidosNavigator() {
  return (
    <PedidosStack.Navigator>
      <PedidosStack.Screen
        name="PedidosScreen"
        component={Pedidos}
        options={{ headerTitle: 'Pedidos' }}
      />
    </PedidosStack.Navigator>
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
