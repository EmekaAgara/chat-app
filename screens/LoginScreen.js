import { StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Input, Image } from 'react-native-elements' 
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = ({ navigation }) => {
    const[email, setEmail] = useState (""); 
    const[password, setPassword] = useState ("");

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        console.log(authUser);
        if(authUser ){
          navigation.replace('Home')
        }
      });

      return unsubscribe;
    },  []);

    const signIn = () => {
      auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));

    };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Image
        source={{
          uri:
          "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVycGxlJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={{ width:200, height: 200, marginBottom:30}}
      />

      <View style={styles.inputContainer}>
            <Input 
                style={styles.input}
                placeholder='Email address'
                autoFocus 
                underlineColorAndroid = "transparent"
                type="email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <Input 
                style={styles.input}
                placeholder='Password' 
                secureTextEntry 
                type="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                onSubmitEditing={signIn}
            />
      </View>

      

      <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
      <Button containerStyle={styles.button} onPress={()=> navigation.navigate("Signup")} type="outline" title="Sign up"/>
      <View style={ {height:150 }}/>
    
    </KeyboardAvoidingView>
   
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
      alignItems:'center',
      justifyContent:'center',
      padding:10,
      backgroundColor:'white',

    },

    inputContainer: {
      width: 300,
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