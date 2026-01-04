import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageSate;
  productsPage: ProductsPageSate;
  ordersPage: OrdersPageSate;
}

/** HOMEPAGE  **/
export interface HomePageSate {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS PAGE  **/
export interface ProductsPageSate {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERS PAGE **/

export interface OrdersPageSate {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
