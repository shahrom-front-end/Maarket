import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "basket",
  initialState: {
    products: localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : [],
    total: 0,
    cartQuantity: 0,
  },
  reducers: {
    addProduct: (state: any, action: any) => {
      if (
        state.products.find((el: any) => el.product.id === action.payload.id)
      ) {
        state.products = state.products.map((elem: any) => {
          if (elem.product.id === action.payload.id) {
            elem.quantity++;
          }
          return elem;
        });
        state.total = state.products.reduce((acc: any, curr: any) => {
          return acc + curr.quantity * curr.product.Price;
        }, 0);
        return;
      }

      state.products.push({
        product: action.payload,
        quantity: 1,
      });
      state.total = state.products.reduce((acc: any, curr: any) => {
        return acc + curr.quantity * curr.product.Price;
      }, 0);
      state.cartQuantity += 1;

      localStorage.setItem("basket", JSON.stringify(state.products));
    },
    incrementProduct: (state: any, action: any) => {
      console.log(action.payload);

      state.products = state.products.map((elem: any) => {
        if (elem.product.id === action.payload) {
          elem.quantity++;
        }
        return elem;
      });
      state.total = state.products.reduce((acc: any, curr: any) => {
        return acc + curr.quantity * curr.product.Price;
      }, 0);
    },
    decrementProduct: (state: any, action: any) => {
      console.log(action.payload);
      state.products = state.products.map((elem: any) => {
        if (elem.product.id === action.payload) {
          elem.quantity--;
        }
        return elem;
      });
      state.total = state.products.reduce((acc: any, curr: any) => {
        return acc + curr.quantity * curr.product.Price;
      }, 0);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((elem: any) => {
        return elem.product.id !== action.payload;
      });
      state.cartQuantity-=1
      state.total = state.products.reduce((acc: any, curr: any) => {
        return acc + curr.quantity * curr.product.Price;
      }, 0);
      localStorage.setItem("basket", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, decrementProduct, deleteProduct, incrementProduct } =
  slice.actions;

export default slice.reducer;
