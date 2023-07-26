import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native'

const ProductListItem = ({ title, onPress, bgColor }:any) => {
    return (
        <View style={styles.productItemContainer}>
            <Pressable android_ripple={{color:"#ced474"}} onPress={onPress} style={{...styles.pressableVeiw,backgroundColor:bgColor}}>
                <View style={styles.ProductItemInner}>
                    <Text ellipsizeMode='clip' numberOfLines={1} style={styles.title}>
                        {title}
                    </Text>

                </View>
            </Pressable>
        </View>

    )
}

const styles=StyleSheet.create({
    productItemContainer:{
        flex:1,
        margin:16,
        height:220,
        borderRadius:1
    },
    ProductItemInner:{
        flex:1,
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    },
    pressableVeiw:{
        flex:1
    },
    title:{
        fontWeight:'bold',
        fontSize:30,
        color:'black'

    }
})
export default ProductListItem;