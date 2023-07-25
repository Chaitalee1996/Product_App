import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserProfile from '../../screen/user/UserProfile';
import Bottom_Nav from '../bottomNavigation/Bottom_Nav';

const Drawer_Nav = () => {
    
    const Drawer = createDrawerNavigator();
  return (
    <View style={{flex:1}}>
       <Drawer.Navigator>
      <Drawer.Screen name="Product List" component={Bottom_Nav} options={{headerShown:false}} />
      <Drawer.Screen name="User Profile" component={UserProfile} options={{headerShown:true}} />
    </Drawer.Navigator>
    </View>
  )
}

export default Drawer_Nav