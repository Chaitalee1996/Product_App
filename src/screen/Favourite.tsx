import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button,View,Text } from 'react-native'
import Background from '../components/commanComponent/Background'

export default function Favourite() {
  const navigation=useNavigation()
  return (
    <Background>

<View>
    <Text>Favoute list </Text>
    <Button title="Go to Register" onPress={()=>{navigation.navigate('register')}}/>
     {/* {navigation.reset({routes:'register'})} */}
  </View>
    </Background>
  
  )
}
