import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularProducts from "./PopularProducts";
import NewProducts from "./NewProducts";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularProducts } from "./slice";
import { retrieveNewProducts } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularProducts: (data: Product[]) => dispatch(setPopularProducts(data)),
});
const setNewProductsRetrieve = createSelector(
  retrieveNewProducts,
  (newProducts) => ({ popularProducts: newProducts })
);

export default function HomePage() {
  const { setPopularProducts } = actionDispatch(useDispatch());
  const { popularProducts } = useSelector(setNewProductsRetrieve);

  useEffect(() => {}, []);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularProducts />
      <NewProducts />
      <Advertisement />
      <Events />
    </div>
  );
}
