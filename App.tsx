/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import { NavigationContainer } from '@react-navigation/native';
import Favourite from './src/screen/Favourite';
import ProductList from './src/screen/ProductList';
import Stack_nav from './src/Navigation/stacknavigation/stack_nav';




function App(): JSX.Element {

  const Tab = createBottomTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Stack_nav/>
    </View>

  )
}



export default App;
