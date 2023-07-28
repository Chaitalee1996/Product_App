import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useContext } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'

import ProductListItem from '../components/ProductListItem/prodcutListItemIndex'
 
import { useDispatch, useSelector } from 'react-redux';

import { NavigationProp } from '@react-navigation/native'
import { getProductsListAction } from '../store/slices/ProductsSlice'
// import { Context } from '../context'
type IncidentNavigation = {
  productId: String;

}
export default function ProductList() {

  const productList = useSelector((state: any) => state.productReducer.productList)
  
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<Record<string, IncidentNavigation>, string>>();
  // const  = <IncidentNavigation>()
  //random color for every list item
  const randomColour = () => {
    const letters = "0123456789ABCDEF"
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  //go to dipaly page
  const handalOnPress = (getId: string) => {

    navigation.navigate('productDetails', { productId: getId })
  }

  const getProductList=()=>{
     dispatch(getProductsListAction())
  }
useEffect(()=>{
  getProductList()
},[])
  return (
    <View>
      <Text>Prodcut list</Text>
      <FlatList
        data={productList}
        renderItem={(dataItem) =>
          // <Text>{dataItem.item.title}</Text> 
          <ProductListItem title={dataItem.item.title} bgColor={randomColour()} onPress={() => { handalOnPress(dataItem.item.id) }} />}
        keyExtractor={(keyId) => keyId.id}
        numColumns={2}
      ></FlatList>

    </View>





  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})