import { Avatar, Stack, AvatarGroup } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "success.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "primary.light" }}>CK</Avatar>
      </Stack>

      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "success.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "primary.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jan Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="Jan Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Avatar
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
          variant="square"
        >
          BW
        </Avatar>
        <Avatar
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
          variant="rounded"
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
