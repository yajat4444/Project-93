import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View,WebView } from 'react-native';
import BottomTabNavigator from 'react-navigation-tabs';
import AppTabNavigator from './component/AppTabNavigator';
export default class BirthdayGifts extends React.Component{
    render(){
        return(
     <View>
     <AppTabNavigator />
     </View>
     )
    }
}