<script src="http://localhost:8097"></script>
import {createSlice} from '@reduxjs/toolkit'
import { log } from 'console'
import { useDispatch } from 'react-redux'
import { AppThunk } from '../index';
import ProductsListAPI from '../../api/Products/productListAPI'

const ProductsSlice=createSlice({
    name:'products',
    initialState:{
        productList:[],
        productDetails:[]
    },
    reducers:{
        getProductsList(state,action){
            state.productList=action.payload
        },
        getProductDetails(state,action){
          state.productList=action.payload
        }
        // addToFavourite(state,action){
            
        // },
        // removteFromFavorite(state,action){}
    }
})



export const getProductsListAction=():AppThunk => async (dispatch)=>{
  return ProductsListAPI.GetProductsListAPI()
  .then((response)=>{
  
      dispatch(ProductsSlice.actions.getProductsList(response.data.products))
  }).catch((error) => { console.log(error) })
      
}

// export const getPRoductDetailsAction=():AppThunk=>async(dispatch)=>{
//   return ProductsListAPI.GetProductDetailsAPI(productId)
//   .then((response)=>{
//     // console.log(response.data)
//     dispatch(ProductsSlice.actions.getProductDetails(response.data))
//   }).catch((error)=>{console.log(error)})
// }

export  default ProductsSlice.reducer 