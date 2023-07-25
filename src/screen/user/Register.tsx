import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Register() {
const navigation=useNavigation()
  return (
<View>
<Button title='Back' onPress={()=>navigation.navigate('user')}></Button>
</View>
  )
}
