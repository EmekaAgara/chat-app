import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Image } from 'react-native-elements' 
import { StatusBar } from 'expo-status-bar'
// import { StatusBar } from 'expo-status-bar'

const LoginScreen = () => {
    const[email, setEmail] = useState (""); 
    const[password, setPassword] = useState ("");

  return (
    <View>
      <Image 
        source={{
          uri:
          "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHVycGxlJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={{ width:200, height: 200}}
      />

        <View style={StyleSheet.inputContainer}>
            <Input 
                placeholder='Email address'
                autoFocus 
                type="email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />


            <Input 
                placeholder='Password' 
                secureTextEntry 
                type="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
        </View>

        <Button></Button>

        {/* <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
        <Button containerStyle={styles.button} onPress={signIn} title="Login"/> */}
    </View>
   
  );
};

export default LoginScreen;

// const styles = StyleSheet.create({
//     inputContainer:{},
//     button:{},
// });