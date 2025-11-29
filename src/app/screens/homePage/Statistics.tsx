import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Divider from "../../components/divider";

export default function Statistics() {
  return (
    <div className="static-frame">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-num">100 +</Box>
            <Box className="static-text">Power Tools</Box>
          </Stack>

          <Divider height="64" width="2" bg="#FFC600" />

          <Stack className="static-box">
            <Box className="static-num">50 +</Box>
            <Box className="static-text">Years Experience</Box>
          </Stack>

          <Divider height="64" width="2" bg="#FFC600" />

          <Stack className="static-box">
            <Box className="static-num">500 +</Box>
            <Box className="static-text">Accessories</Box>
          </Stack>

          <Divider height="64" width="2" bg="#FFC600" />

          <Stack className="static-box">
            <Box className="static-num">1M +</Box>
            <Box className="static-text">Satisfied Customers</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
