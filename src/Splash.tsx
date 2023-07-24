import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({navigation}:any) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Nav")
        },2000)
    })
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash