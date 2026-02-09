import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: #58574cff;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"row"} sx={{ mt: "94px" }}>
          <Stack flexDirection={"column"} style={{ width: "340px" }}>
            <Box>
              <div className="footer__brand-menu">
                <a
                  className="footer__links_brand"
                  href="/pages/dewalt-heritage"
                >
                  <img
                    src="/img/dewalt-footer.jpg"
                    alt="dewalt-footer"
                    width="300"
                    height="128"
                  />
                </a>
              </div>
            </Box>

            <Box className={"foot-desc-txt"}>
              <p>
                Copyright © 2025 Stanley Black & Decker, Inc. All rights
                reserved.
              </p>
              Privacy | Your Privacy Choices | Cookies | Terms of Use | Site Map
              | Transparency in the Supply | Chain Vulnerability Disclosure
              Policy | Accessibility Statement
            </Box>
            <Box className="sns-context">
              <img src={"/icons/facebook-brands.svg"} />
              <img src={"/icons/twitter-b.svg"} />
              <img src={"/icons/instagram-3.svg"} />
              <img src={"/icons/mobile.svg"} />
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Sections</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                  <Link to="/products">Products</Link>
                  {authMember && <Link to="/orders">Orders</Link>}
                  <Link to="/help">Help</Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box>
                <Box className={"foot-category-title"}>Find us</Box>
                <Box
                  flexDirection={"column"}
                  sx={{ mt: "20px" }}
                  className={"foot-category-link"}
                  justifyContent={"space-between"}
                >
                  <Box flexDirection={"row"} className={"find-us"}>
                    <span>SERVICE CENTER</span>
                    <div>Downtown, Dubai</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Phone Number:</span>
                    <div> 1577-0933</div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Hours:</span>
                    <div>
                       09:00–18:00 (Closed on public holidays, Saturdays and
                      Sundays)
                    </div>
                  </Box>
                  <Box className={"find-us"}>
                    <span>Email:</span>
                    <div>devexuz@gmail.com</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ border: "1px solid #242424", width: "100%", opacity: "0.2" }}
          sx={{ mt: "80px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright Devex Global, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
