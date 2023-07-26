import { useNavigation } from "@react-navigation/native";
import React,{useEffect, useState} from "react";
import {Button, Text, View} from 'react-native'
import { useRoute } from "@react-navigation/native";
import {GetProductDetailsAPI} from '../api/Products/productListAPI'
import ProductDetailsItem from "../components/ProdcutDetailsItem/productDetailsItemIndex";
const ProductDetails=()=>{
   
    const route=useRoute()
    const productId=route.params.productId
    console.log("productId,",productId)
     const [productDetails,setProductDetails]=useState([])
  useEffect(() => {
    GetProductDetailsAPI(productId).then((res) =>
    setProductDetails(res.data),
//    console.log("res",res.data.category)
    ).catch((error) => { console.log(error) })

  }, [productId])


 console.log("Price",productDetails)  
 return(
        <View>
  <Text>Product Details</Text>
  <ProductDetailsItem productDetailsData={productDetails}/>
      </View>
    )
}
export default ProductDetails
