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
import { title } from 'process';

export default function Stack_nav() {
    const Stack = createNativeStackNavigator()
    return (
      
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                   headerTitleAlign:'center'
                }}>
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Nav" component={Drawer_Nav}  options={{ headerShown: false }} />
                    <Stack.Screen name="user" component={UserProfile} options={{ title:'User Profile',headerBackVisible:false}}></Stack.Screen>
                    <Stack.Screen name="register" component={Register} options={{ title:'Register',headerBackVisible:false}}></Stack.Screen>
                    <Stack.Screen name="productDetails" component={ProductDetails} options={{title:'Product Details',headerBackTitleVisible:false}}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
    )
}
