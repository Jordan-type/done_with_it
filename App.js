import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, Alert } from "react-native";
import { v4 as uuid } from 'uuid';
import ListItem from './app/components/ListItem';
import Header from './app/components/Header';
import AddItem from './app/components/AddItem';

export default function App() {
    // console.log(require('./assets/icon.png'));
    const [items, setItems] = useState ([
        {id: uuid(), text: 'Milk'},
        {id: uuid(), text: 'Eggs'},
        {id: uuid(), text: 'Bread'},
        {id: uuid(), text: 'Juice'},        
    ]); 

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item =>item.id != id);
        });
    };

    const addItem = (text) => {
        if (!text) {
            Alert.alert('Error', 'Please enter an Item', [{text: 'OK'}]);
            // Alert.alert(
            //     'Heading',
            //     'Body',
            //     [{
            //       text: 'option1',
            //     //   onPress: () => handler
            //     }]
            //   )
        } else {
        setItems(prevItems => {
            return [{id: uuid(), text},...prevItems]
        });
      }
    };


    return (
        
        // SafeAreaView for phone with a notch
        <SafeAreaView style = { styles.container } >
        <Header title='Shopping List'/> 
        <AddItem addItem={addItem}/>

        <FlatList 
          data={items} 
          renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem}/>
          )} 
        />
        </SafeAreaView>
    );
}
{/* <Text>{item.text}</Text> */}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
    },
});