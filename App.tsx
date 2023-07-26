/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  View,StatusBar
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stack_nav from './src/Navigation/stacknavigation/stack_nav';

function App(): JSX.Element {

  const Tab = createBottomTabNavigator();
console.log(StatusBar.currentHeight)
  return (
    <View style={{ flex: 1 }}>
      <Stack_nav/>
     
    </View>

  )
}

export default App;
