import {
  ProductCategory,
  ProductPower,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: string;

  productStatus: ProductStatus;
  productCategory: ProductCategory;

  productName: string;
  productPrice: number;
  productStockCount: number;

  productSize: ProductSize;
  productPower: ProductPower;

  productDescription?: string;
  productImages: string[];
  productViews: number;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCategory?: ProductCategory;
  search?: string;
}
