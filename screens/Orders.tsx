import React, { useContext } from  'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import OrdersContext from '../context/OrdersContext';

import ActiveOrder from '../components/ActiveOrder';

const Orders = () => {
  const { activeOrder } = useContext(OrdersContext);

    return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.title} >Pedidos</Text>
            <View style={styles.ordersContainer}>
              { activeOrder.id &&
                <ActiveOrder
                  id={activeOrder.id}
                  orderItems={activeOrder.orderItems}
                  status={activeOrder.status}
                  timeStamp={activeOrder.timeStamp}
                  total={activeOrder.total}
                  adress={activeOrder.adress}
                  key={activeOrder.id}
                />
              }
              { activeOrder.id &&
                <ActiveOrder
                  id={activeOrder.id}
                  orderItems={activeOrder.orderItems}
                  status={activeOrder.status}
                  timeStamp={activeOrder.timeStamp}
                  total={activeOrder.total}
                  adress={activeOrder.adress}
                  key={activeOrder.id + 1}
                />
              }
            </View>
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: '#f5f8f9',
    },
    ordersContainer: {
      marginBottom: 30
    },
    title: {
      fontSize: 20,
      padding: 20,
      fontWeight: 'bold',
      color: '#333',
      alignSelf: 'center'
    }
});

export default Orders;