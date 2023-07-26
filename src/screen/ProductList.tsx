import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text,View,Button } from 'react-native'

export default function ProductList() {
  const navigation=useNavigation()
  return (
 <View>
<Button title="Show Product Details" onPress={()=>{navigation.navigate('productDetails')}}/>
 </View>
  )
}
