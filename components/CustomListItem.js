import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({id, ChatName, enterChat}) => {
  return (
   <ListItem>
       <Avatar
           rounded
           source={{
               uri: "https://cdn.vectorstock.com/i/1000x1000/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.webp",
           }}
       />
       <ListItem.Content>
           <ListItem.Title style={{ fontWeight: "800"}}>
            Creteca Hackathon
           </ListItem.Title>
           <ListItem.Subtitle 
           numberOfLines={1}
           ellipsizeMode='tail'>
               sample subtitle text
               sample subtitle text
               sample subtitle text
               sample subtitle text
               sample subtitle text
               sample subtitle text

           </ListItem.Subtitle>
       </ListItem.Content>
   </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});