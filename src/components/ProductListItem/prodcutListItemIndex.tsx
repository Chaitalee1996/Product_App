import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Background from "../commanComponent/Background";
import { responsiveScreenHeight, responsiveScreenWidth, responsiveHeight } from 'react-native-responsive-dimensions'
const ProductListItem = ({ title, onPress, bgColor }: any) => {
    return (
       
            <View style={styles.productItemContainer}>
                <Pressable android_ripple={{ color: "#ced474" }} onPress={onPress} style={{ ...styles.pressableVeiw, backgroundColor: bgColor }}>
                    <View style={styles.ProductItemInner}>
                        <Text ellipsizeMode='clip' numberOfLines={1} style={styles.title}>
                            {title}
                        </Text>

                    </View>
                </Pressable>
            </View>

    )
}

const styles = StyleSheet.create({
    productItemContainer: {
        width: responsiveScreenWidth(39),
        // height:responsiveScreenWidth(30) ,
        margin: 16,
        // height:220,
        borderRadius: 1
    },
    ProductItemInner: {
        height: responsiveHeight(20),
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressableVeiw: {

    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'

    }
})
export default ProductListItem;