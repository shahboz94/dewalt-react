import React, { useRef } from "react";
import { Box, Container, Stack } from "@mui/material";

export default function Statistics() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -290,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 290,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="static-frame">
      <Container>
        <Stack className="static-title">
          <Box className="title-text">100 Years of History</Box>

          <Box className="prev-next">
            <img
              src={"/icons/icons8-arrow-left-50.png"}
              className="swiper-button-prev"
              onClick={scrollLeft}
              style={{ cursor: "pointer" }}
            />

            <img
              src={"/icons/icons8-arrow-right-50.png"}
              className="swiper-button-next"
              onClick={scrollRight}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Stack>
        <Stack
          className="info-slider"
          ref={sliderRef}
          sx={{
            // backgroundImage: `url('/img/pexels-mag.jpg')`,
            backgroundSize: "cover",
            overflowX: "auto",
            scrollBehavior: "smooth",
            display: "flex",
            gap: "20px",
            paddingBottom: "20px",
          }}
        >
          <Stack className="static-box">
            <Box className="static-num">1924</Box>
            <Box className="static-ct">HISTORY</Box>
            <Box className="static-text">
              Raymond DeWalt forms the DEWALT Products Company
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">1929</Box>
            <Box className="static-ct">HISTORY</Box>
            <Box className="static-text">
              DEWALT Products Co. moves to a new plant and office building in
              Lancaster, PA
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">1941</Box>
            <Box className="static-ct">HISTORY</Box>
            <Box className="static-text">
              The DEWALT company is rapidly expands rapidly to support the
              wartime effort
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">1947</Box>
            <Box className="static-ct">HISTORY</Box>
            <Box className="static-text">
              DEWALT Products Co, re-incorporates under DEWALT Inc.
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">1953</Box>
            <Box className="static-ct">HISTORY</Box>
            <Box className="static-text">
              DEWALT Inc. extends operations into Canada
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">1960</Box>
            <Box className="static-ct">HISTORY</Box>
            <Box className="static-text">
              Black & Decker acquires DEWALT Inc.
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">1992</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              DEWALT launches its first line of portable electric power tools
              and accessories
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2005</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              The SHOCKS-Active Vibration Control reduces vibration by up to 50%
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2010</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              DEWALT'S 12V MAX System of lithium ion tools feature compact
              designs with power and features needed for the job site
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2011</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              DEWALT expands its lithium ion tools with a new 20V MAX System
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2012</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              DEWALT introduced its cordless 20VMAX-XR line of brushless power
              tools
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2015</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              TOOL CONNECT™ allows users with Bluetooth-enabled batteries to
              track tools from anywhere
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2016</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              The FLEXVOLT is the world's first battery that automatically
              changes voltage when the user changes tools
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2017</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              DEWALT introduces the innovative BREAKAWAY™ Reciprocating Saw
              Blades.
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2021</Box>
            <Box className="static-ct">INNOVATION</Box>
            <Box className="static-text">
              DEWALT POWERSTACK™ wows with pouch cell battery technology
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">7</Box>
            <Box className="static-ct">CUTTING-EDGE PLANTS</Box>
            <Box className="static-text">
              bring employment and DEWALT pride throughout the U.S.
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">4</Box>
            <Box className="static-ct">BEST AWARDS</Box>
            <Box className="static-text">
              DEWALT racks up four Popular Mechanics 2021 tool awards
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">2021</Box>
            <Box className="static-ct">MODERN HISTORY</Box>
            <Box className="static-text">
              DEWALT's impact driver featured on HISTORY Channel's "Modern
              Marvels"
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">26</Box>
            <Box className="static-ct">INNOVATION AWARDS</Box>
            <Box className="static-text">
              DEWALT scores 26 Pro Tool Innovation Awards (PTIA)in 2021
            </Box>
          </Stack>
          <Stack className="static-box">
            <Box className="static-num">100</Box>
            <Box className="static-ct">FOOT DROP</Box>
            <Box className="static-text">
              In 2021, DEWALT announces TOUGHSERIES with tapes that can take a
              serious hit
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
