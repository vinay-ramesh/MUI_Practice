import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log("countries", countries);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("value", value);
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width={250}>
      <TextField
        label="select countries"
        select
        value={countries}
        onChange={handleChange}
        fullWidth //takes complete width of 250px
        // To make multiple selection,
        SelectProps={{
          multiple: true,
        }}
        color="secondary"
        size="small"
        helperText="please select your country"
        // error
      >
        <MenuItem value="In"> India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="Aus">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
