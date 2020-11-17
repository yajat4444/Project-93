import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,WebView } from 'react-native';

export default class MathematicsTesting extends React.Component{
     OpenLink=()=>{
        <WebView
           source={{ uri:'https://studio.code.org/projects/applab/mRGwnH_ms8JdbDQa7hjlB27SXpRLlowq4JiF-YUJnqE'}}
            />
        }
    render(){
       return(
    <View>
    <TouchableOpacity color="Greenyellow"title="Test Your Maths"
    OnPress={
   this.OpenLink()
    }
    ></TouchableOpacity>
    </View>
       )
}
}