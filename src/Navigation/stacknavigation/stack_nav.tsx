import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../../screen/ProductDetails';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../../Splash';
import ProductList from '../../screen/ProductList';
import Drawer_Nav from '../drawerNavigation/Drawer_Nav';


import UserProfile from '../../screen/user/UserProfile';
import Register from '../../screen/user/Register';

export default function Stack_nav() {
    const Stack = createNativeStackNavigator()
    return (
      
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Nav" component={Drawer_Nav}  options={{ headerShown: false }} />
                    <Stack.Screen name="user" component={UserProfile}></Stack.Screen>
                    <Stack.Screen name="register" component={Register} options={{headerShown:false}}></Stack.Screen>
                    <Stack.Screen name="productDetails" component={ProductDetails}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>

    )
}
