import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Button, Text, View} from 'react-native'

const ProductDetails=()=>{
    const navigation=useNavigation()
    return(
        <View>
            <Button title="Go to Register" onPress={()=>{navigation.navigate('register')}}/>
        </View>
    )
}
export default ProductDetails
