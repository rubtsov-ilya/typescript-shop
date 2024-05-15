import { configureStore } from '@reduxjs/toolkit'
import { shopApi } from './shopApi'
import userReducer from './slices/UserSlice'
import { combineReducers } from 'redux'

const rootReduser = combineReducers({
  [shopApi.reducerPath]: shopApi.reducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
})