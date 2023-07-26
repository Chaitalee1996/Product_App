import React from "react";
import { Image, Text, View } from 'react-native'
import { responsiveWidth, responsiveScreenHeight, responsiveFontSize } from "react-native-responsive-dimensions";

const ProductDetailsItem = ({ productDetailsData }: any) => {
    return (

        <View style={{ height: responsiveScreenHeight(30), backgroundColor: '#F2F2F2', padding: responsiveWidth(10) }}>
            <Image source={require('../../assest/mobile.jpg')} style={{ height: 180, width: 300 }} />

            <View style={{ height: responsiveScreenHeight(30) }}>

                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', marginTop: responsiveWidth(5) }}>Name: {productDetailsData.title}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>Descriptions:{productDetailsData.description} </Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', }}>Barnd: {productDetailsData.brand}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', }}>Price: {productDetailsData.price}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', }}>category:{productDetailsData.category}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', }}>discountPercentage: {productDetailsData.discountPercentage}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', }}>stock: {productDetailsData.stock}</Text>
                <Text style={{ fontSize: responsiveFontSize(2), fontWeight: 'bold', }}>rating: {productDetailsData.rating}</Text>
            </View>

        </View>
    )
}
export default ProductDetailsItem