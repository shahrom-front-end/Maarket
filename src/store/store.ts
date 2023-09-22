import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../reducers/todoSlice'
import { todosApi } from '../api/api'
import Basket from '../reducers/Basket'

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    basket:Basket,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware : (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(todosApi.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch