import axios from 'axios';



const GetProductsListAPI = async () => {
  const respose = await axios({
    method: 'GET',
    url: "https://dummyjson.com/products"
  })
  return respose
}; 


 const GetProductDetailsAPI = async (id: any) => {
  const respose = await axios({
    method: "GET",
    url: `https://dummyjson.com/products/${id}`
  })
  return respose

}

const ProductsListAPI ={
  GetProductsListAPI,
  GetProductDetailsAPI
 }

export default ProductsListAPI;


