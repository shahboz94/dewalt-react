import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveBestSellers = createSelector(
  selectHomePage, //select
  (homePage) => homePage.bestSellers //reselect qildik
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (homePage) => homePage.newDishes
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (homePage) => homePage.topUsers
);
