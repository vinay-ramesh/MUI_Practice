import { Menu } from "@mui/icons-material";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";

// Drawer helps to create side bars
const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width={"250px"} textAlign={"center"} p={2} role="presentation">
          <Typography variant="h6" component={"div"}>
            SidePanel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
