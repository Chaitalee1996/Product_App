import React from "react";
import { Image, Text, View } from 'react-native'
import { responsiveWidth, responsiveScreenHeight, responsiveFontSize } from "react-native-responsive-dimensions";

const ProductDetailsItem = ({ productDetailsData }: any) => {
    return (

        <View style={{ height: responsiveScreenHeight(30), padding: responsiveWidth(10) }}>
            <Image source={require('../../assest/mobile.jpg')} style={{ height: 180, width: 250 }} />

            <View style={{ height: responsiveScreenHeight(70) ,paddingHorizontal:15}}>

                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'white', marginTop: responsiveWidth(5) }}>Name: {productDetailsData.title}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'white' }}>Descriptions:{productDetailsData.description} </Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'white' }}>Barnd: {productDetailsData.brand}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'white' }}>Price: {productDetailsData.price}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'white' }}>category:{productDetailsData.category}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'white' }}>discountPercentage: {productDetailsData.discountPercentage}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'white' }}>stock: {productDetailsData.stock}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', color: 'white' }}>rating: {productDetailsData.rating}</Text>
            </View>

        </View>
    )
}
export default ProductDetailsItem