import {combineReducers} from '@reduxjs/toolkit';
import ProductsSlice from '../store/slices/ProductsSlice'
const rootReducers=combineReducers({
    productReducer:ProductsSlice
})
export default rootReducers;