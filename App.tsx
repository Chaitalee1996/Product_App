/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import {
  View, StatusBar
} from 'react-native';

import Stack_nav from './src/Navigation/stacknavigation/stack_nav';

import store from './src/store';


function App(): JSX.Element {


  console.log(StatusBar.currentHeight)
  return (
   <Provider store={store}>
      <Stack_nav />
    </Provider>
  )
}

export default App;
