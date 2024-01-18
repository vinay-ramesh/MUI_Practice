import React from "react";
import { Box } from "@mui/material";

const MuiBoxLayout = () => {
  return (
    <>
      <Box
        sx={{
          height: "100px",
          width: "100px",
          backgroundColor: "primary.main",
          color: "white",
          p: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Material UI
      </Box>
      {/* p={2} means 2*8px = 16px of padding is applied */}
      <Box
        display="flex"
        p={2}
        bgcolor={"success.light"}
        height="100px"
        width="100px"
      ></Box>
    </>
  );
};

export default MuiBoxLayout;
