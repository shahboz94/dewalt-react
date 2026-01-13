import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";

import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveNewProducts } from "./selector";

/** REDUX SELECTOR **/
const newProductsRetriever = createSelector(
  retrieveNewProducts,
  (products) => ({ newProducts: products })
);

export default function NewProducts() {
  const { newProducts } = useSelector(newProductsRetriever);

  if (!newProducts || newProducts.length === 0) {
    return <Box className="no-products">New products are Not available!!!</Box>;
  }

  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">New Products</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newProducts.map((product, index) => (
                <Card key={index} variant="outlined" className="card">
                  <CardOverflow>
                    <AspectRatio ratio="1">
                      <img
                        src={product.productImages?.[0] || "/img/default.jpg"}
                        alt={product.productName}
                      />
                    </AspectRatio>
                  </CardOverflow>

                  <CardOverflow variant="soft" className="product-detail">
                    <Stack className="info">
                      <Stack flexDirection="row">
                        <Typography className="title">
                          {product.productName}
                        </Typography>
                        <Divider height="24" width="2" bg="#d9d9d9" />
                        <Typography className="price">
                          ${product.productPrice}
                        </Typography>
                      </Stack>
                      <Typography className="views">
                        {product.productViews ?? 0}
                        <VisibilityIcon sx={{ fontSize: 20, ml: 0.5 }} />
                      </Typography>
                    </Stack>
                  </CardOverflow>
                </Card>
              ))}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
