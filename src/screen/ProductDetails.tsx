import Background from "../components/commanComponent/Background";
import React, { useEffect, useState, } from "react";
import { Button, Text, View, Image, TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from "@react-navigation/native";
import { GetProductDetailsAPI } from '../api/Products/productListAPI'
import ProductDetailsItem from "../components/ProdcutDetailsItem/productDetailsItemIndex";
import { RouteProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import addToFavourite from './ProductList'

  type Props={
     title:string
  }

const ProductDetails = () => {
  // type IncidentRouteParams = {
  //   productId: any;
  // }

  // const route = useRoute<RouteProp<Record<string, IncidentRouteParams>, string>>();
  const productId = useRoute<any>()?.params.productId

  const [productDetails, setProductDetails] = useState<any>([])
console.log(productDetails)

  const [favorite, setFavourite] = useState([])


  // function addToFavourite(P_Id: any) {
  //   console.log("P_Id", P_Id)
  //   let cpyFavouiteItems = [...favorite]
  //   const index = cpyFavouiteItems.findIndex(item => item.id === P_Id)

  //   if (index === -1) {
  //     const getCurrentProduct = productDetails.find(
  //       (item:any) => item.id == P_Id)
  //     console.log("getCurrentProduct", getCurrentProduct)
  //     cpyFavouiteItems.push({
  //       title:getCurrentProduct.title
  //     })
      
  //     }
  //   setFavourite(cpyFavouiteItems)
  // }


  useEffect(() => {
    GetProductDetailsAPI(productId).then((res) =>{
       setProductDetails(res.data),
       console.log("res==>",res.data)
    }
      
    ).catch((error) => { console.log(error) })

  }, [])

  //show the favourite  icon on left side only in stack navigation
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => { console.log("Add to favorite")
            // addToFavourite(productId) 
            }}>
            < MaterialIcons name="favorite-border" size={30} />
          </TouchableOpacity>
        )
      }
    })

  }, [])

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
