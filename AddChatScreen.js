import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLayoutEffect, useState } from 'react'
import { Button, Icon, Input } from 'react-native-elements';
import { db } from './firebase';

const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "chats",
        });
     
      
    }, [navigation]);

    const createChat = async () => {
        await db.collect('chats').add({
            chatName:input
        }).then (() =>{
            navigation.goback()
        }).catch((error) => alert(error));

    };

  return (
    <View style={styles.container}>
        <Input
        placeholder='Enter a group chat name'
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
            <Icon name='wechat' type='antdesign' size={24} color="black"/>
        }
        />
        <Button onPress={createChat} title="Create new chat"/> 
    </View>
  );
};

export default AddChatScreen

const styles = StyleSheet.create({
    container: {},
});