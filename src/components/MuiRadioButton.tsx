import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");

  //   console.log({ value });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <FormControl /* error */>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            value={"0-2"}
            label="0-2"
          />
          <FormControlLabel control={<Radio />} value={"3-5"} label="3-5" />
          <FormControlLabel control={<Radio />} value={"6-10"} label="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid user selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
