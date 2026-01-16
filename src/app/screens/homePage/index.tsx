import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularProducts from "./PopularProducts";
import NewProducts from "./NewProducts";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { setNewProducts, setPopularProducts } from "./slice";
import ProductService from "../../services/ProductService";
import { Product } from "../../../lib/types/product";
import { ProductCategory } from "../../../lib/enums/product.enum";
import { retrievePopularProducts } from "./selector";
import "../../../css/home.css";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularProducts: (data: Product[]) => dispatch(setPopularProducts(data)),
  setNewProducts: (data: Product[]) => dispatch(setNewProducts(data)),
});
const setPopularProductsRetrieve = createSelector(
  retrievePopularProducts,
  (newProducts) => ({ popularProducts: newProducts })
);

export default function HomePage() {
  const { setPopularProducts, setNewProducts } = actionDispatch(useDispatch());

  useEffect(() => {
    // Backend server data fetch => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        ProductCategory: ProductCategory.DRILL,
      })
      .then((data) => {
        setPopularProducts(data);
      })
      .catch((err: any) => console.log(err));
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        ProductCategory: ProductCategory.DRILL,
      })
      .then((data) => {
        setNewProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
