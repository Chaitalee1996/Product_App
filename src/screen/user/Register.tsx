import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import Background from '../../components/commanComponent/Background'

export default function Register() {
const navigation=useNavigation()
  return (
    <Background>
<View>
  <Button title='Back' onPress={()=>navigation.navigate('user')}></Button>
</View>

    </Background>
  )
}
