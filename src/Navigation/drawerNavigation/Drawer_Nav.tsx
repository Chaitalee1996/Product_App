import { View, Text,useWindowDimensions } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserProfile from '../../screen/user/UserProfile';
import Bottom_Nav from '../bottomNavigation/Bottom_Nav';
import CustomDrawer from './CustomDrawer';



const Drawer_Nav = () => {
    const Drawer = createDrawerNavigator();
    const dimensions = useWindowDimensions();
  return (
    <View style={{flex:1}}>
       <Drawer.Navigator initialRouteName='Products' drawerContent={(props)=> <CustomDrawer {...props} 
        screenOptions={{  headerShown:true,drawerHideStatusBarOnOpen:false,
        drawerType: dimensions.width >= 768 ? 'front' : 'permanent',

      }}
      
      />}>
      <Drawer.Screen name="Products" component={Bottom_Nav} options={{headerShown:true}} />
    
    </Drawer.Navigator>
    </View>
  )
}

export default Drawer_Nav