import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from 'react-native'

const ProductDetails=()=>{
    const navigation=useNavigation()
    return(
        <View>
            <Button title="Go to Dashbaord" onPress={()=>{navigation.navigate('dashbaord')}}/>
        </View>
    )
}
export default ProductDetails
