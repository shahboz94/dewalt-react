import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
  popularProducts: [],
  newProducts: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularProducts(state, action) {
      state.popularProducts = action.payload;
    },
    setNewProducts(state, action) {
      state.newProducts = action.payload;
    },
  },
});
export const { setPopularProducts, setNewProducts: setNewProducts } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
