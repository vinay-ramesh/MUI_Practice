import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

// Badge - Display component, helps to generate a small badge to the top right of its child element
const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>

      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>

      <Badge badgeContent={100} color="primary" max={999}>
        <Mail />
      </Badge>

      <Badge variant={"dot"} color="primary" invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
