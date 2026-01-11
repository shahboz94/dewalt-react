import { createSelector } from "@reduxjs/toolkit/dist";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveopularProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularProducts
);

export const retrieveNewProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newProducts
);
