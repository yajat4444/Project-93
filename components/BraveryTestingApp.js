import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,WebView } from 'react-native';

export default class BraveryTesting extends React.Component{
    OpenLink=()=>{
       <WebView
          source={{ uri:'https://studio.code.org/projects/applab/kGfojNAfTKsP0C4qivnvQof9E0XBQzlzQQeswroxsT8'}}
           />
       }
   render(){
      return(
   <View>
   <TouchableOpacity color="Greenyellow"title="Test Your Bravery"
   OnPress={
  this.OpenLink()
   }
   ></TouchableOpacity>
   </View>
      )
}
}