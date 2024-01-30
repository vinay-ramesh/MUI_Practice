import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

// BreadCrumbs is a type of secondary navigation scheme that reveals users location at website - by default breadcrumb take 8 items and we can change it by maxItem prop
const MuiBreadCrumbs = () => {
  return (
    <Box margin={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
        // itemsBeforeCollapse={2}
      >
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Catelog
        </Link>
        <Link href="#" underline="hover">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadCrumbs;
