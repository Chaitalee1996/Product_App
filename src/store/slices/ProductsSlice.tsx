{/* <script src="http://localhost:8097"></script>
import {createSlice} from '@reduxjs/toolkit'
import { log } from 'console'
import { useDispatch } from 'react-redux'

const ProductsSlice=createSlice({
    name:'products',
    initialState:{
        poductList:[]
    },
    reducers:{
        getProductsList(state,action){
            state.poductList=action.payload
        },
        addToFavourite(state,action){},
        removteFromFavorite(state,action){}
    }
})
const dispatch=useDispatch
export const getProductsListAction=(data)=>{
    console.log(data)
    // dispatch(poductList.action.getProductsList(data))
}

export  default ProductsSlice.reducer */}