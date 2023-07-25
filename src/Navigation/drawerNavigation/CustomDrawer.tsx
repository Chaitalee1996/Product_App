import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'

import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerContentScrollView, DrawerItem,DrawerItemList } from '@react-navigation/drawer'
const CustomDrawer = (props: any) => {



  return (
    <>
      <View style={{ height: responsiveScreenHeight(30), backgroundColor: '#F08080', padding: responsiveWidth(10) }}>
        <Image source={require('../../assest/profileIcon.jpg')} style={{ height: 90, width: 90 }} />
        <Text style={{ color: "white", fontSize: responsiveFontSize(2), fontWeight: 'bold', }}>ArtCode Comapny</Text>
      </View>

      <View style={{ height: responsiveScreenHeight(50) }}>
        <>
          {/* ustom drawer using Drawer Item */}
          {/* to access the list of drawer navigation scrren(Drawer_Nav) <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} /> */}
          <View
            style={{
              borderBottomStartRadius: 10,
              borderBottomEndRadius: 10,
              //  borderColor: "#EBE7E6",
              borderColor: '#3B3B3B',
              borderBottomWidth: 2,
            }} />
          
            <DrawerItem
            label="User Profile"
            labelStyle={{
              marginLeft: -25,
              fontFamily: 'Robbto-medium',
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}
            onPress={() => {
              props.navigation.navigate('User Profile')
            }}
            icon={() => (
              <Icon name="user" size={30} color="#900" />

            )} />
            {/* </DrawerContentScrollView> */}
         

          <View
            style={{
              borderBottomStartRadius: 10,
              borderBottomEndRadius: 10,
              //  borderColor: "#EBE7E6",
              borderColor: '#3B3B3B',
              borderBottomWidth: 2,
            }} />
          <DrawerItem
            label="My Account"
            labelStyle={{
              marginLeft: -25,
              fontFamily: 'Robbto-medium',
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}
            onPress={() => {
              props.navigation.navigate('User Profile')
            }}
            icon={() => (
              <Icon name="user" size={30} color="#900" />
              
            )} />
          <View
            style={{
              borderBottomStartRadius: 10,
              borderBottomEndRadius: 10,
              //  borderColor: "#EBE7E6",
              borderColor: '#3B3B3B',
              borderBottomWidth: 2,
            }} />
          <DrawerItem
            label="My Order"
            labelStyle={{
              marginLeft: -25,
              fontFamily: 'Robbto-medium',
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}
            onPress={() => {
              props.navigation.navigate('User Profile')
            }}
            icon={() => (
              <MaterialCommunityIcons name="folder-account" size={30} color="#900" />
            )} />

          <View
            style={{
              borderBottomStartRadius: 10,
              borderBottomEndRadius: 10,
              //  borderColor: "#EBE7E6",
              borderColor: '#3B3B3B',
              borderBottomWidth: 2,
            }} />
          <DrawerItem
            label="My Card"
            labelStyle={{
              marginLeft: -25,
              fontFamily: 'Robbto-medium',
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
            }}
            onPress={() => {
              props.navigation.navigate('User Profile')
            }}
            icon={() => (
    
              <FontAwesome name="shopping-cart" size={30} color="#900" />
            )} />


        </>

      </View>
      <View style={{ height: responsiveScreenHeight(20) }}>
        <Text>Footer Drawer</Text>
      </View>
    </>


  )
}

export default CustomDrawer