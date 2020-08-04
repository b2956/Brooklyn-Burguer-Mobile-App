import React, { useState } from 'react';
import { Modal, View, ScrollView, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { BuyModalProps, OrderAdress } from '../types';

const EndBuyModal = (props: BuyModalProps) => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const [orderAdress, setOrderAdress] = useState({
        cep: '',
        city: '',
        complement: '',
        neighborhood: '',
        references: '',
        state: '',
        street: ''
    } as OrderAdress);

    const getAdressByCep = () => {
        return fetch(`https://brasilapi.com.br/api/cep/v1/${orderAdress.cep}`, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then(resData => {

            setErrorMessage(resData.message);
            
            return setOrderAdress( prevState => {
                const adress: OrderAdress = {
                    ...prevState,
                    city: resData.city,
                    neighborhood: resData.neighborhood,
                    state: resData.state,
                    street: resData.street
                }

                return adress;
            })
        })
        .catch(err => {
            setError(true)
        })
    }

    const changeAdressValue = (target: string, value: string) => {
        setOrderAdress(prevState => {
            const newAdress = {
                ...prevState
            }

            newAdress[target] = value;

            return  newAdress
        })
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={props.modalVisibility}
        >
            <KeyboardAvoidingView
                behavior='height'
                enabled
            >
                <View style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <View style={styles.headContainer}>
                            <Text style={styles.title}>Checkout</Text>
                            <TouchableOpacity 
                                style={styles.closeButton}
                                onPress={props.hideModal}
                            >
                                <Text style={styles.closeButtonText}>&#10799;</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.bodyContainer}>
                            <View style={styles.inputContainer}>
                                <Text>CEP:</Text>
                                <TextInput 
                                    value={orderAdress.cep}
                                    keyboardType='numeric'
                                    placeholder='ex: 05010000'
                                    style={styles.input}
                                    onChange={(target) => {
                                        const targetName = 'cep';
                                        const value = target.nativeEvent.text

                                        changeAdressValue(targetName, value);
                                    }}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text>Endereço:</Text>
                                <TextInput 
                                    value={orderAdress.street}
                                    placeholder='ex. Avenida Faria Lima'
                                    style={styles.input}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text>Estado:</Text>
                                <TextInput 
                                    value={orderAdress.state}
                                    keyboardType='numeric'
                                    placeholder='ex. PR'
                                    style={styles.input}
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Text>Cidade:</Text>
                                <TextInput 
                                    value={orderAdress.city}
                                    keyboardType='numeric'
                                    placeholder='ex: Curitiba'
                                    style={styles.input}
                                />
                            </View>
                            <TouchableOpacity onPress={getAdressByCep}>
                                <Text>Acionar API</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        width: Dimensions.get('screen').width * 0.85,
        height: Dimensions.get('screen').height * 0.8,
        backgroundColor: '#f5f8f9',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        minHeight: 30
    },
    title: {
        fontSize: 21,
        fontWeight: '700',
        margin: 0,
        alignSelf: 'center',
        textAlign: 'center'
    },
    closeButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#008bc1',
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5.46,
        elevation: 9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    closeButtonText: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 25
    },
    bodyContainer: {
        marginTop: 20,
        width: '80%'
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 0,
        paddingHorizontal: 10,
        flex: 1,
        marginLeft: 10
    }
});

export default EndBuyModal;
