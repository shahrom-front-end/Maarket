import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
type TProduct = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: [];
  price: number;
  rating: number;
  stock: number;  
  thumbnail: string;
  title: string;
  quantity: number;
  search:string
}
const storage:string | null= localStorage.getItem('card')
export const slice = createSlice({
    name: 'basket',
  initialState:storage?JSON.parse(storage): {
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      if(!state.products.find((e:TProduct)=>e.id==action.payload.id)){
        state.products.push(action.payload);
        localStorage.setItem(
          'card',
          JSON.stringify({
            products: state.products
          }),
        );
      }
    },
    delProductInCard:(state,action)=>{
      state.products=state.products.filter((e:TProduct)=>e.id!==action.payload)
      localStorage.setItem(
        'card',
        JSON.stringify({
          products: state.products
        }),
      );
      
    },
    increment:(state,action)=>{
      state.products.find((e:TProduct)=>e.id==action.payload).quantity++;
      localStorage.setItem(
        'card',
        JSON.stringify({
          products: state.products
        }),
      );
    },
    decrement:(state,action)=>{
      state.products.find((e:TProduct)=>e.id==action.payload).quantity--;
      localStorage.setItem(
        'card',
        JSON.stringify({
          products: state.products
        }),
      );
    },
    setSearch(state,action){
      state.search = action.payload
    },
}
});

export const {addProduct,setSearch,delProductInCard,increment,decrement  } = slice.actions;

export default slice.reducer;