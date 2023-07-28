import { View, Text } from 'react-native'
import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import type { ThunkAction } from 'redux-thunk';
import type { Action } from '@reduxjs/toolkit';
import rootReducers from './rootReducers';
const store = configureStore({

    reducer: rootReducers

})

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export default store;