import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../../screen/ProductDetails';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../../Splash';
import ProductList from '../../screen/ProductList';
import Drawer_Nav from '../drawerNavigation/Drawer_Nav';
import Index from '.';
import Bottom_Drawer from '.';

export default function Stack_nav() {
    const Stack = createNativeStackNavigator()
    return (
      
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Nav" component={Bottom_Drawer}  options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>

    )
}
