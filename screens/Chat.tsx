import React from  'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Message from '../components/Message';

import messages from '../assets/data/messages';

const Chat = () => {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer} >
          <Text style={styles.title} >Converse com a gente</Text>
        </View>
        <ScrollView 
          contentContainerStyle={{
            alignItems: 'center',
            paddingVertical: 25
          }}
        >
          {
            messages.map((item, index) => {
              return (
                < Message 
                  text={item.text}
                  timeStamp={item.timeStamp}
                  userId={item.userId}
                  key={index}
                />
              )
            })
          }
          {
            messages.map((item, index) => {
              return (
                < Message 
                  text={item.text}
                  timeStamp={item.timeStamp}
                  userId={item.userId}
                  key={index}
                />
              )
            })
          }
          {
            messages.map((item, index) => {
              return (
                < Message 
                  text={item.text}
                  timeStamp={item.timeStamp}
                  userId={item.userId}
                  key={index}
                />
              )
            })
          }
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput} 
            multiline={true}
            
          />
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="send" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: '#f5f8f9',
    },
    titleContainer: {
      height: 40,
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      padding: 5,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center'
    },
    inputContainer: {
      height: 50,
      paddingHorizontal: 15,
      paddingVertical: 5,
      backgroundColor: '#dcdfe0',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row'
    },
    textInput: {
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingVertical: 0,
      minHeight: 30,
      paddingHorizontal: 10,
      width: '85%',
      borderWidth: 1,
      borderColor: '#b0b2b3',
    },
    button: {
      height: 40,
      width: 40,
      backgroundColor: '#008bc1',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default Chat;