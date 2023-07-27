import Background from "../components/commanComponent/Background";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from 'react-native'
import { useRoute } from "@react-navigation/native";
import { GetProductDetailsAPI } from '../api/Products/productListAPI'
import ProductDetailsItem from "../components/ProdcutDetailsItem/productDetailsItemIndex";
import { RouteProp } from '@react-navigation/native';
const ProductDetails = () => {
  type IncidentRouteParams = {
    productId: String;
  }
  const route = useRoute<RouteProp<Record<string, IncidentRouteParams>, string>>();
  // const route=useRoute()
  const productId = route.params.productId
  console.log("productId,", productId)
  const [productDetails, setProductDetails] = useState([])
  useEffect(() => {
    GetProductDetailsAPI(productId).then((res) =>
      setProductDetails(res.data),
      //    console.log("res",res.data.category)
    ).catch((error) => { console.log(error) })

  }, [productId])


  console.log("Price", productDetails)
  return (
    <Background>
      <View>
        <Text>Product Details</Text>
        <ProductDetailsItem productDetailsData={productDetails} />
      </View>
    </Background>

  )
}
export default ProductDetails
