import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { Text, View, Button, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ProductListItem from '../components/ProductListItem/prodcutListItemIndex'
import {GetPtoductsListAPI} from '../api/Products/productListAPI'
import Background from '../components/commanComponent/Background'

 


export default function ProductList() {
  const [loading, setLoading] = useState(false)
  const [ProductsList, setProductsList] = useState([])
  const navigation = useNavigation()
  
  useEffect(() => {
    GetPtoductsListAPI().then((res) =>
      setProductsList(res.data.products),
    ).catch((error) => { console.log(error) })

  }, [])
  //random color for every list item
  const randomColour=()=>{
    const letters="0123456789ABCDEF"
    let color="#";

    for(let i=0;i<6;i++)
    {
      color += letters[Math.floor(Math.random()*16)]
    }
return color
  }
  //go to dipaly page
const handalOnPress=(getId:number)=>{

  navigation.navigate('productDetails',{productId:getId})
}

  return (
    <Background>
    


      <FlatList
        data={ProductsList}
        renderItem={(dataItem) =>
        // <Text>{dataItem.item.title}</Text> 
        <ProductListItem title={dataItem.item.title} bgColor={randomColour()}  onPress={() =>{handalOnPress(dataItem.item.id)}}/>}
        keyExtractor={(keyId)=>keyId.id}
        numColumns={2}
      ></FlatList>
     

    
    </Background>
  )
}
