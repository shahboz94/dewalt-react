import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import BuildIcon from "@mui/icons-material/Build";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import SettingsIcon from "@mui/icons-material/Settings";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ExtensionIcon from "@mui/icons-material/Extension";

import {
  ProductCategory,
  ProductStatus,
} from "../../../lib/enums/product.enum";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

import { setProducts } from "./slice";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { products } = useSelector(productsRetriever);
  const { setProducts } = actionDispatch(useDispatch());

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | "ALL"
  >("ALL");

  const categoryList: (ProductCategory | "ALL")[] = [
    "ALL",
    ...Object.values(ProductCategory),
  ];
  const [page, setPage] = useState(1);

  useEffect(() => {
    const productService = new ProductService();

    productService
      .getProducts({
        page,
        limit: 8,
        order: "createdAt",
        productCategory:
          selectedCategory === "ALL" ? undefined : selectedCategory,
        search: query || undefined,
      })
      .then((data) => {
        setProducts(data); // faqat backenddan kelgan 8 ta
      })
      .catch(console.log);
  }, [page, selectedCategory, query]);

  const getCategoryIcon = (category: ProductCategory) => {
    switch (category) {
      case ProductCategory.DRILL:
        return <BuildIcon />;
      case ProductCategory.IMPACT:
        return <ElectricBoltIcon />;
      case ProductCategory.SAW:
        return <ContentCutIcon />;
      case ProductCategory.GRINDER:
        return <SettingsIcon />;
      case ProductCategory.BATTERY:
        return <BatteryChargingFullIcon />;
      case ProductCategory.ACCESSORY:
        return <ExtensionIcon />;
      default:
        return <BuildIcon />;
    }
  };

  return (
    <div className="products">
      <Container>
        <Stack flexDirection="column" alignItems="center">
          <Stack className="avatar-big-box">
            <Box className="category-title">DEWALT Products</Box>

            <Box className="search-box">
              <input
                className="search-input"
                placeholder="Search product"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="contained" endIcon={<SearchIcon />}>
                Search
              </Button>
            </Box>
          </Stack>

          <Stack className="dishes-filter-section">
            <Stack className="filter-box">
              <Button variant="outlined">NEW</Button>
              <Button variant="outlined">PRICE</Button>
              <Button variant="outlined">VIEWS</Button>
            </Stack>

            <Stack direction="row" className="list-category-section">
              <Stack className="product-category">
                {categoryList.map((cat) => (
                  <Button
                    key={cat}
                    variant={
                      selectedCategory === cat ? "contained" : "outlined"
                    }
                    onClick={() => setSelectedCategory(cat)}
                    startIcon={
                      cat !== "ALL"
                        ? getCategoryIcon(cat as ProductCategory)
                        : undefined
                    }
                    sx={{ mb: 1 }}
                  >
                    {cat}
                  </Button>
                ))}
              </Stack>

              <Stack
                className="product-wrapper"
                spacing={2}
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
              >
                {products.length ? (
                  products.map((product) => (
                    <Stack key={product._id} className="product-card">
                      <Stack
                        className="product-img"
                        sx={{
                          backgroundImage: `url(${
                            product.productImages?.[0] || "/images/no-image.png"
                          })`,
                        }}
                      >
                        <Button className="shop-btn">
                          <img src="/icons/shopping-cart.svg" alt="cart" />
                        </Button>

                        <Button className="view-btn">
                          <Badge
                            badgeContent={
                              product.productStatus === ProductStatus.ACTIVE
                                ? product.productViews
                                : 0
                            }
                          >
                            <RemoveRedEyeIcon />
                          </Badge>
                        </Button>
                      </Stack>

                      <Box className="product-desc">
                        <span className="product-title">
                          {product.productName}
                        </span>
                        <div className="product-desc-icon">
                          <MonetizationOnIcon />
                          {product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  ))
                ) : (
                  <Box
                    className="no-data"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Products are not available!
                  </Box>
                )}
              </Stack>
            </Stack>

            {/* ===== PAGINATION ===== */}
            <Pagination
              count={3}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  slots={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
