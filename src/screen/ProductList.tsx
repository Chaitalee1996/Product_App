import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Button, ActivityIndicator, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ProductListItem from '../components/ProductListItem/prodcutListItemIndex'
import { GetPtoductsListAPI } from '../api/Products/productListAPI'
import Background from '../components/commanComponent/Background'

import { NavigationProp } from '@react-navigation/native'
// import { Context } from '../context'
type IncidentNavigation = {
  productId: String;

}


export default function ProductList() {

  // const { loading, productsList } = useContext<any>(Context)
  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(false)
 
  const navigation = useNavigation<NavigationProp<Record<string, IncidentNavigation>, string>>();
  // const  = <IncidentNavigation>()
      useEffect(() => {
        const ProductListAPI = () => {
            GetPtoductsListAPI().then((res) => {
                if (res) {
                    setLoading(false),
                        setProductsList(res.data.products);
                }
            }


            ).catch((error) => { console.log(error) })
        }
        ProductListAPI()
    }, [])
  
  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} color={"red"} size={"large"} />
    )
  }

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

  return (
    <View>
      <FlatList
        data={productsList}
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