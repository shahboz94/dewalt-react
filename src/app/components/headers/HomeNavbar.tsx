import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";

export default function HomeNavbar() {
  const authMember = null;
  const [count, setCount] = useState(0);
  const [value, setValue] = useState<boolean>(true);

  useEffect(() => {
    console.log("componentDidMount"); //DATzA FETCHING
    setCount(count + 1);
    return () => {
      console.log("componentWillUnmount"); //CLEANUP
    };
  }, [value]);

  /** HANDLERS **/

  const buttonHandler = () => {
    setValue(!value);
  };

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/dewalt-4-logo.svg" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            {authMember ? (
              <img
                className="user-avatar"
                src="/icons/icons8-profile-5.png"
                alt="User Avatar"
                aria-haspopup="true"
              />
            ) : (
              <>
                {/* BASKET */}
                <Basket />

                <Box>
                  <Button variant="contained" className="login-button">
                    Login
                  </Button>
                </Box>
              </>
            )}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>Built for Real Professionals</Box>
            <Box className={"wel-txt"}>
              Your trusted partner in every project
            </Box>
            <Box className={"signup"}>
              {!authMember ? (
                <Button variant={"contained"} className={"signup-button"}>
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
