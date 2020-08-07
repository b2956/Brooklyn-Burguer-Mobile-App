import React, { useState, useContext } from 'react';
import { ScrollView, Dimensions, View, ActivityIndicator } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview'

import OrderContext from '../context/OrdersContext';

const Checkout = ({navigation}: any) => {
    const orders = useContext(OrderContext);

    const [isLoading, setIsLoading] = useState(true);

    const handleNavigationUrlChange = (newNavigationState: WebViewNavigation) => {
        const { url } = newNavigationState;

        console.log(url);

        if(!url) {
            navigation.navigate('CartScreen')
        }

        if(url.includes('status=approved')) {

            orders.orderActions.editOrderStatus('pending')

            // navigation.navigate('CartScreen');
 
            setTimeout(() => {
                navigation.navigate('Pedidos');
            }, 500);
        }
    }

    return (
        <ScrollView >
            { isLoading &&
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ActivityIndicator
                        color='#00ADEF'
                        size='large'
                    />
                </View>
            }
            <View 
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}
            >   
                <WebView 
                    source={{uri: 'http://192.168.0.12:3000/payments/checkout/1/bruno.2956@gmail.com/grand-brooklyn/62.34'}}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    onNavigationStateChange={handleNavigationUrlChange}
                    // originWhitelist={['https://*']}
                    // onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                />
            </View>
            
        </ScrollView>
    )
}

export default Checkout