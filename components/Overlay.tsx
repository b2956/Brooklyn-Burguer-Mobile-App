import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { OverlayProps } from '../types';

const Overlay = (props: OverlayProps) => {
    return (
        <Modal 
            visible={props.modalVisibility}
            transparent={true}
        >
            <TouchableWithoutFeedback>
                <View style={styles.overlay}></View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        height: '100%',
        width: '100%',
        opacity: 0.5,
        backgroundColor: '#000',
        zIndex: 5,
    }
});

export default Overlay;