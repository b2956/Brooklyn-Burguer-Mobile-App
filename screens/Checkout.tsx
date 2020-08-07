import React, { useState } from 'react';
import { ScrollView, Dimensions, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview'

const Checkout = () => {
    const [isLoading, setIsLoading] = useState(true);
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
                    width: Dimensions.get('screen').width,
                    height: Dimensions.get('screen').height
                }}
            >   
                <WebView 
                    source={{uri: 'http://192.168.0.12:3000/payments/checkout/1/bruno.2956@gmail.com/grand-brooklyn/50.00'}}
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    // onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                />
            </View>
            
        </ScrollView>
    )
}

export default Checkout