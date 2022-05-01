import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomListItem from '../components/CustomListItem';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../firebase';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
const HomeScreen = ({ navigation }) => {
    const signOutUser = ( ) => {
        auth.signOut().then(()=>{
            navigation.replace("Login");
        });
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Educhat",
            headerStyle: { backgroundColor: "#FFF" },
            headerTitleStyle: { color:"black" },
            headerTintColor:"black",
            headerLeft:() => (
                <View style={{ marginLeft:20 }}>
                    <TouchableOpacity onPress={signOutUser}>
                    <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}/>
                    </TouchableOpacity>
                    
                </View>
            ),

            headerRight: () => (
                <View
                style={{
                    flexDirection:"row",
                    justifyContent: "space-between",
                    width:80,
                    marginRight:20,
                }}
                >
                    <TouchableOpacity activeOpacity={0.5}>
                    <SimpleLineIcons name='camrecorder' size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
                        <SimpleLineIcons name='note' size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

  return (
      <SafeAreaView>
          <ScrollView>
              <CustomListItem/>
          </ScrollView>
      </SafeAreaView>
  );
};

export default HomeScreen
const styles = StyleSheet.create({});