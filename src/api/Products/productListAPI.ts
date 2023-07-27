import axios from 'axios';
import React from 'react'


const GetPtoductsListAPI = async () => {
  const respose = await axios({
    method: 'GET',
    url: "https://dummyjson.com/products"
  })
  return respose
};

// const ProductsListAPI ={
//     GetPtoductsList
// }

const GetProductDetailsAPI = async (id: any) => {
  const respose = await axios({
    method: "GET",
    url: `https://dummyjson.com/products/${id}`
  })
  return respose

}

export { GetPtoductsListAPI, GetProductDetailsAPI }


