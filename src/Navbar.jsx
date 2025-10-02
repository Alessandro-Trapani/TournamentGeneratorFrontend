import React from "react";
import { AppBar, Toolbar, Typography, Button, Tabs, Tab, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // map routes to indexes
  const routeToIndex = {
    "/": 0,
    "/tournaments": 1,
    "/teams": 2,
    "/about": 3,
  };

  const currentTab = routeToIndex[location.pathname] ?? false;

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        boxShadow: "none",
        zIndex: 1201,
      }}
    >
      <Toolbar>
        <EmojiEventsIcon sx={{ mr: 1, color: "#ff9800" }} />
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          Tournament Generator
        </Typography>

        <Box sx={{ display: { xs: "none", md: "block" }, mr: 2 }}>
          <Tabs
            value={currentTab}
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: "#ff9800" } }}
          >
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Tournaments" component={Link} to="/tournaments" />
          </Tabs>
        </Box>

        <Button
          component={Link}
          to="/login"
          variant="contained"
          sx={{
            backgroundColor: "#ff9800",
            "&:hover": { backgroundColor: "#e68900" },
            borderRadius: "20px",
            px: 3,
            fontWeight: "bold",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
