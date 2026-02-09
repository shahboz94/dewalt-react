import { createSlice } from "@reduxjs/toolkit";
import { ProductsPageSate } from "../../../lib/types/screen";

const initialState: ProductsPageSate = {
  admin: null,
  chosenProduct: null,
  products: [],
};

const productsPageSlice = createSlice({
  name: "productsPage",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const { setAdmin, setChosenProduct, setProducts } =
  productsPageSlice.actions;

const ProductsPageReducer = productsPageSlice.reducer;
export default ProductsPageReducer;
