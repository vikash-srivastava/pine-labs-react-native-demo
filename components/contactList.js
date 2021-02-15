import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import * as Contacts from "expo-contacts";
import { FlatList } from "react-native-gesture-handler";

export default function ContactList(){
    const [contacts, setContacts] = useState([]);
    useEffect(()=> {
        (async ()=> {
            console.log('list is displayed');
            const {status } = await Contacts.requestPermissionsAsync();
            if(status === 'granted'){
                const {data} = await Contacts.getContactsAsync();
                if(data.length> 0 ){
                    console.log(data);
                    setContacts(data);
                }
            }
        })();

    }, []);


    function showContacts(){
    }
    return (
        <SafeAreaView>
            <View>
                <Text>this is a ContactList</Text>
            </View>
            <FlatList data={contacts} renderItem={(item)=> <View><Text>{item.item.firstName}</Text></View> }></FlatList>

            <Button onPress={showContacts} title='Show contacts' ></Button>
        </SafeAreaView>
    )
}