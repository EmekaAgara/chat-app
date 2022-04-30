import { View, StyleSheet } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Button, Input, Text} from "react-native-elements"
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"back",
        });

    }, [navigation]);

    const register = () => {
      auth     
          .createUserWithEmailAndPassword(email, password)
          .then((authUser) => {
          authUser.user.update({
            displayName:name,
            photoURL: imageUrl || "https://cdn.vectorstock.com/i/1000x1000/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.webp",
         });

      })
    
      .catch((error) => alert(error.message));
    };


  return (
    <KeyboardAvoidingView behavior='' style={styles.container}>
      <StatusBar style='Light' />
      <Text h3 style={{ marginBottom:50 }}>
          Create a textapp account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder='Full Name' 
          autoFocus 
          Type='text'
          value={name}
          onChangeText={(text)=>setName(text)} 
        />

        <Input
          style={styles.input}
          placeholder='Email address' 
          Type='email'
          value={email}
          onChangeText={(text)=>setEmail(text)} 
        />

        <Input
          style={styles.input}
          placeholder='Password' 
          Type='password'
          secureTextEntry 
          value={password}
          onChangeText={(text)=>setPassword(text)} 
        />
  
        <Input
        style={styles.input}
          placeholder='link to your Profile picture' 
          Type='text'
          value={imageUrl}
          onChangeText={(text)=>setImageUrl(text)} 
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register} 
        title='Register'
        />
        <View style={{height: 100}}/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white",

    },

    inputContainer:{
        width:300,
    },



    button:{
      width:300,
      marginTop:10,
      // color:"black",
    },

    input:{
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        paddingLeft:20,
        width:300,
    },

});