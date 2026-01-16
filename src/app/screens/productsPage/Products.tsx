import React, { useMemo, useState } from "react";
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

import { setProducts } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { products } = useSelector(productsRetriever);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | "ALL"
  >("ALL");

  const visibleProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== "ALL" && p.productCategory !== selectedCategory)
        return false;
      if (query && !p.productName.toLowerCase().includes(query.toLowerCase()))
        return false;
      return true;
    });
  }, [selectedCategory, query]);

  const categoryList: (ProductCategory | "ALL")[] = [
    "ALL",
    ...Object.values(ProductCategory),
  ];

  const getCategoryIcon = (category: ProductCategory | "ALL") => {
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
              <Button variant="contained" color="primary">
                NEW
              </Button>
              <Button variant="contained" color="secondary">
                PRICE
              </Button>
              <Button variant="contained" color="secondary">
                VIEWS
              </Button>
            </Stack>

            <Stack direction="row" className="list-category-section">
              <Stack className="product-category">
                {categoryList.map((cat) => (
                  <Button
                    key={cat}
                    variant={
                      selectedCategory === cat ? "contained" : "outlined"
                    }
                    color={selectedCategory === cat ? "primary" : "secondary"}
                    onClick={() => setSelectedCategory(cat)}
                    startIcon={
                      cat !== "ALL"
                        ? getCategoryIcon(cat as ProductCategory)
                        : undefined
                    }
                    sx={{ marginBottom: 1 }}
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
                {visibleProducts.length !== 0 ? (
                  visibleProducts.map((product) => {
                    return (
                      <Stack key={product._id} className={"product-card"}>
                        <Stack
                          className="product-img"
                          sx={{
                            backgroundImage: `url(${product.productImages[0]})`,
                          }}
                        >
                          <Button className="shop-btn">
                            <img
                              src="/icons/shopping-cart.svg"
                              alt="Shopping Cart"
                              style={{ display: "flex" }}
                            />
                          </Button>

                          <Button
                            className="view-btn"
                            sx={{
                              right: "36px",
                              minWidth: "auto",
                              padding: "6px",
                            }}
                          >
                            <Badge
                              badgeContent={
                                product.productStatus === ProductStatus.ACTIVE
                                  ? 20
                                  : 0
                              }
                              color="secondary"
                            >
                              <RemoveRedEyeIcon sx={{ color: "gray" }} />
                            </Badge>
                          </Button>
                        </Stack>

                        <Box className={"product-desc"}>
                          <span className={"product-title"}>
                            {product.productName}
                          </span>
                          <div className={"product-desc-icon"}>
                            <MonetizationOnIcon />
                            {product.productPrice}
                          </div>
                        </Box>
                      </Stack>
                    );
                  })
                ) : (
                  <Box className="no-data">Products are not available!</Box>
                )}
              </Stack>
            </Stack>

            <Stack className={"pagination-title"} alignItems={"center"}>
              <Pagination
                count={3}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                    color={"secondary"}
                  />
                )}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <Box className="category-title">Our Family Brands</Box>
        <Stack direction="row" spacing={2} mt={2} justifyContent="center">
          <Box className="brand-img-1" />
          <Box className="brand-img-2" />
          <Box className="brand-img-3" />
          <Box className="brand-img-4" />
        </Stack>
      </div>

      <div className="address">
        <Container>
          <Stack className={"address-area"}>
            <Box className={"add-title"}>Our address</Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.2231714699258!2d69.22528515394224!3d41.32090667449867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b96d86aa283%3A0x94ce07c99e2fd34e!2sMumtoz%20Restoran!5e0!3m2!1sko!2skr!4v1753959722673!5m2!1sko!2skr"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
