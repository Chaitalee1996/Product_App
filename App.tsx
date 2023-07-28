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
import ProductContext from './src/context/index';


function App(): JSX.Element {


console.log(StatusBar.currentHeight)
  return (
  
    // <ProductContext> 
   
  <Stack_nav/>
  
    //  </ProductContext>
  
    
    

  )
}

export default App;
