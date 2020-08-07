import React, { useState } from 'react';
import { Modal, View, ScrollView, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { requestPermissionsAsync,  getCurrentPositionAsync} from 'expo-location';

import { BuyModalProps, OrderAdress, Location } from '../types';

import mapsApiKey from '../config/mapsApiKey';

const EndBuyModal = (props: BuyModalProps) => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [hasAdress, setHasAdress] =  useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPosition, setCurrentPosition] = useState({} as Location);
    

    const [orderAdress, setOrderAdress] = useState({
        cep: '',
        city: '',
        complement: '',
        neighborhood: '',
        references: '',
        state: '',
        street: ''
    } as OrderAdress);

    const getDefaultAdress = () => {
        const adress = {
            cep: '80060130',
            city: 'Curitiba',
            complement: 'Apto. 608',
            neighborhood: 'Centro',
            references: 'Próximo ao Missal Shawarma',
            state: 'PR',
            street: 'Francisco Torres 740'
        }

        setOrderAdress(adress);

        getPositionByAdress(adress);

        setHasAdress(true);
    }

    const getCurrentLocation = async () => {
        setIsLoading(true);

        const { granted } = await requestPermissionsAsync();

        if(granted) {
            const { coords } = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            // console.log(coords);

            const { latitude, longitude } = coords;

            // console.log(`${latitude}, ${longitude}`);

            setCurrentPosition({
                latitude,
                longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04
            });

            
            getAdressByLocation(latitude, longitude);
        }
    }

    const getAdressByLocation = (latitude: number, longitude: number) => {
        const apiCallUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${mapsApiKey}
        `;

        return fetch(apiCallUrl)
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(resData => {
                if(resData.status === 'OK') {
                    let cep, city, neighborhood, state, street, streetNumber;
                    // console.log(resData.results[0]);

                    const filterAdressComponent = (component: string) => {
                        const addresComponent = resData.results[0].address_components.filter(item => item.types.includes(component));

                        // console.log(addresComponent[0].short_name);

                        return addresComponent[0].short_name;
                    }

                    cep = filterAdressComponent('postal_code');
                    city = filterAdressComponent('administrative_area_level_2');
                    neighborhood = filterAdressComponent('sublocality');
                    state = filterAdressComponent('administrative_area_level_1');
                    street = filterAdressComponent('route');
                    streetNumber = filterAdressComponent('street_number');
                    cep = cep.replace('-', '');

                    const adress: OrderAdress = {
                        cep: cep,
                        city: city,
                        complement: '',
                        neighborhood: neighborhood,
                        references: '',
                        state: state,
                        street: `${street}, ${streetNumber}`
                    }

                    // console.log(adress);

                    setOrderAdress(adress);

                    setIsLoading(false)

                    setHasAdress(true);
                }
            })
            .catch(err => {

            })
    }

    const getAdressByCep = () => {

        setIsLoading(true);

        return fetch(`https://brasilapi.com.br/api/cep/v1/${orderAdress.cep}`, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then(resData => {

            setErrorMessage(resData.message);
            
            setOrderAdress( prevState => {
                const adress: OrderAdress = {
                    ...prevState,
                    city: resData.city,
                    neighborhood: resData.neighborhood,
                    state: resData.state,
                    street: resData.street
                }

                getPositionByAdress(adress);

                return adress;
            })

            setIsLoading(false);

            return setHasAdress(true);
        })
        .catch(err => {
            setError(true)
        })
    }

    const getPositionByAdress = (orderAdress: OrderAdress) => {

        const streetName = orderAdress.street.split(' ').join('+');

        const apiCallUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${streetName}+${orderAdress.state}+${orderAdress.city}&key=${mapsApiKey}
        `;

        return fetch(apiCallUrl)
            .then(response => {
                // console.log(response);
                return response.json();
            })
            .then(resData => {
                if(resData.status === 'OK') {

                    const {lat, lng} = resData.results[0].geometry.location;

                    // console.log(`${lat}, ${lng}`)

                    setCurrentPosition({
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: 0.04,
                        longitudeDelta: 0.04
                    })
                }
            })
            .catch(err => {

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

    // const getCheckout = () => {
    //     props.hideModal();
    //     props.addOrder();
    // }

    const addNewOrder = () => {
        props.hideModal();
        props.addOrder(orderAdress, currentPosition);
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
                            <Text style={styles.title}>Selecionar Endereço</Text>
                            <TouchableOpacity 
                                style={styles.closeButton}
                                onPress={props.hideModal}
                            >
                                <Text style={styles.closeButtonText}>&#10799;</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.bodyContainer}>
                            { (!hasAdress && !isLoading ) &&
                                <View style={styles.selectionContainer}>
                                    <View style={styles.adressSelectionItem}>
                                        <TouchableOpacity 
                                        onPress={getDefaultAdress}
                                        style={styles.button}
                                        >   
                                            <Text style={styles.buttonText}>Usar Endereço Padrão</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        onPress={getCurrentLocation}
                                        style={styles.locationButton}
                                        >   
                                            <MaterialIcons name="my-location" size={24} color="#fff" />
                                            <Text style={styles.buttonText}>Buscar Localização</Text>
                                        </TouchableOpacity>
                                        <View style={styles.getByCepContainer}>
                                            <Text style={styles.subTitle}>Buscar por CEP</Text>
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
                                            <TouchableOpacity 
                                            onPress={getAdressByCep}
                                            style={styles.cepButton}
                                            >
                                                <Text style={styles.buttonText}>Buscar CEP</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            }
                            {isLoading &&
                                <View style={styles.spinnerContainer}>
                                    <ActivityIndicator color='#00ADEF' size="large" />
                                </View>
                            }
                            { hasAdress &&
                                <View style={styles.adressContainer}>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.subTitle}>CEP</Text>
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
                                        <Text style={styles.subTitle}>Endereço</Text>
                                        <TextInput 
                                            value={orderAdress.street}
                                            placeholder='ex. Av. das Torres'
                                            style={styles.input}
                                            onChange={(target) => {
                                                const targetName = 'street';
                                                const value = target.nativeEvent.text

                                                changeAdressValue(targetName, value);
                                            }}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.subTitle}>Estado</Text>
                                        <TextInput 
                                            value={orderAdress.state}
                                            placeholder='ex. PR'
                                            style={styles.input}
                                            onChange={(target) => {
                                                const targetName = 'state';
                                                const value = target.nativeEvent.text

                                                changeAdressValue(targetName, value);
                                            }}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.subTitle}>Cidade</Text>
                                        <TextInput 
                                            value={orderAdress.city}
                                            placeholder='ex: Curitiba'
                                            style={styles.input}
                                            onChange={(target) => {
                                                const targetName = 'city';
                                                const value = target.nativeEvent.text

                                                changeAdressValue(targetName, value);
                                            }}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.subTitle}>Bairro</Text>
                                        <TextInput 
                                            value={orderAdress.neighborhood}
                                            placeholder='ex: Centro'
                                            style={styles.input}
                                            onChange={(target) => {
                                                const targetName = 'neighborhood';
                                                const value = target.nativeEvent.text

                                                changeAdressValue(targetName, value);
                                            }}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.subTitle}>Complemento</Text>
                                        <TextInput 
                                            value={orderAdress.complement}
                                            placeholder='ex: Apto. 01'
                                            style={styles.input}
                                            onChange={(target) => {
                                                const targetName = 'complement';
                                                const value = target.nativeEvent.text

                                                changeAdressValue(targetName, value);
                                            }}
                                        />
                                    </View>
                                    <View style={styles.inputContainer}>
                                        <Text style={styles.subTitle}>Referências</Text>
                                        <TextInput 
                                            value={orderAdress.references}
                                            placeholder='ex: Pç. Osvaldo Cruz'
                                            style={styles.input}
                                            onChange={(target) => {
                                                const targetName = 'references';
                                                const value = target.nativeEvent.text

                                                changeAdressValue(targetName, value);
                                            }}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={{...styles.button}}
                                        onPress={addNewOrder}
                                    >
                                        <Text style={styles.buttonText}>Confirmar Endereço</Text>
                                    </TouchableOpacity>
                                </View>
                            }
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
        alignItems: 'center'
    },
    headContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: '#00ADEF',
        minHeight: 30,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    title: {
        fontSize: 21,
        fontWeight: '700',
        margin: 0,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#fff'
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
        alignSelf: 'flex-start'
    },
    closeButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#fff',
        // shadowColor: '#00ADEF',
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.7,
        // shadowRadius: 5.46,
        // elevation: 9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    closeButtonText: {
        fontWeight: '700',
        color: '#00ADEF',
        fontSize: 25
    },
    bodyContainer: {
        marginTop: 20,
        width: '95%'
    },
    selectionContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    adressSelectionItem: {
        width: '90%',
        height: 300,
        marginVertical: 2.5,
        paddingVertical: 5,
        // borderRadius: 5,
        // backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: '#00ADEF',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.3,
        // shadowRadius: 2,
        // elevation: 2,
    },
    adressContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    inputContainer: {
        // width: '100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 0,
        paddingHorizontal: 10,
        height: 35,
        width: 200
    },
    button: {
        backgroundColor: '#008bc1', 
        height: 40,
        width: 180,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        marginVertical: 20
    },
    getByCepContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    cepButton: {
        backgroundColor: '#008bc1', 
        height: 40,
        width: 180,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        marginVertical: 10
    },
    locationButton: {
        backgroundColor: '#008bc1', 
        height: 40,
        width: 180,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 10,
        marginLeft: 5,
        shadowColor: '#00ADEF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        marginVertical: 5
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700'
    },
    spinnerContainer: {
        flex: 1,
        height: Dimensions.get('screen').height * 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EndBuyModal;
