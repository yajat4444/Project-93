import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import GiftsSeeing from '../Screens/GiftsSeeing';
import GiftsUploading from '../Screens/GiftsUploading';

export const AppTabNavigator = createBottomTabNavigator({
  GiftsSeeing : {
    screen: GiftsSeeing,
    navigationOptions :{
      tabBarLabel : "See Gifts",
    }
  },
 GiftsUploading : {
    screen: GiftsUploading,
    navigationOptions :{
      tabBarLabel : "Upload Gift",
    }
  }
});
