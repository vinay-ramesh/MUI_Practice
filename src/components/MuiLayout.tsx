import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

// Stack used to manage layout in one dimension, either x or y
// Grid used to manage layout in two dimension, and create responsive layouts
// <GridContainer> - parent element, <GridElement> - Child element

// Grid component under the hood uses the flexbox model
// Grid consist of 12 columns
// Each item in the grid can take up one or more columns as its width
// There are 5 breakpoints, each corresponds to certain device width
// xs - mobile, sm - tablet, md - desktop, lg and xl for larger monitors
// We can assign integer values to each breakpoint, which indicates how many of the 12 available columns are occupied by that item when the viewport satisfies that breakpoint constraints

// Paper component provides visual hierarchy while building layouts -- helps building card and also helps to define section in UI
const MuiBoxLayout = () => {
  console.log("Hello");
  console.log("Hello");
  return (
    <Paper sx={{ padding: "32px" }} elevation={2}>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            height: "100px",
            width: "100px",
            backgroundColor: "primary.main",
            color: "white",
            p: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
              cursor: "pointer",
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
      </Stack>
      <Grid container my={2} /* spacing={2} */ rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor={"primary.main"} p={2} color={"white"}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.main"} p={2} color={"white"}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.main"} p={2} color={"white"}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.main"} p={2} color={"white"}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiBoxLayout;
