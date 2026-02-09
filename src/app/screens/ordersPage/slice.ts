import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageSate } from "../../../lib/types/screen";

const initialState: OrdersPageSate = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const orderPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  orderPageSlice.actions; // Action

const OrderPageReducer = orderPageSlice.reducer;
export default OrderPageReducer; //reducer store ga joyladik
