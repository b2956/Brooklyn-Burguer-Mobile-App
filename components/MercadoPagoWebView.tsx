import React from 'react';
import { WebView } from 'react-native-webview';

const MercadoPagoWebView = () => {
    // 'http://192.168.0.12:3000/payments/mercado-pago-checkout'
    return (
        <WebView 
            source={{ uri: 'http://192.168.0.12:3000/payments/mercado-pago-checkout' }}
            style={{
                width: '100%',
                height: '100%'
            }}
            scalesPageToFit={true}
            startInLoadingState={true}
        />
    )
}

export default MercadoPagoWebView;