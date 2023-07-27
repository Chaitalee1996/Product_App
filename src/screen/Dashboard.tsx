import { View, Text, Image,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Background from '../components/commanComponent/Background'
import { useNavigation } from '@react-navigation/native'

const Dashboard = () => {

  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => { console.log('add to favorite') }}>
        
            <Image source={require('../assest/profileIcon.jpg')} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
        )
      }
    })

  }, [])
  return (
    <Background>
      <View>
        <Text>Dashboard</Text>
      </View>

    </Background>

  )
}

export default Dashboard