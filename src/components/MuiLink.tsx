import { Stack, Link, Typography } from "@mui/material";
import React from "react";

// Link component - also a Nav realted component -  helps to create and customise anchor elements with theme colors and typography styles.
const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" underline="hover" variant="body2">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
