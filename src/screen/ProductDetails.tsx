import Background from "../components/commanComponent/Background";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Button, Text, View, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import {getPRoductDetailsAction} from '../store/slices/ProductsSlice'
import ProductDetailsItem from "../components/ProdcutDetailsItem/productDetailsItemIndex";



const ProductDetails = ({ navigation, route }: any) => {
   const productId = useRoute<any>()?.params.productId
const dispatch=useDispatch()
const ProductDetails=useSelector((state:any)=>state.productReducer.productDetails)
  console.log(ProductDetails)

  const getProductDetails=()=>{
    dispatch(getPRoductDetailsAction())
  }
  
  useEffect(()=>{
    getProductDetails()
  },[])
  return (
    <Background>
    <View>
      <Text>Product Details</Text>
      <ProductDetailsItem productDetailsData={ProductDetails} />
    </View>
  </Background>

  )
}
export default ProductDetails
