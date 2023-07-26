import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function UserProfile() {
  const navigation=useNavigation()
  return (
<View>
   <Button title='Back' onPress={()=>navigation.navigate('dashbaord')}></Button>
</View>
  )
}
