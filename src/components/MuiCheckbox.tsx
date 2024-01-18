import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [acceptTNC, setAacceptTNC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAacceptTNC(e.target.checked);
  };
  console.log({ skills });

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      // check whether the element is present in array or not, index == -1, means its is not present, so spread the array and add the element.
      setSkills([...skills, e.target.value]);
    } else {
      // if the element is present, then user is unchecked the box, so we need to filter the array and give checked values only
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box>
      <FormControlLabel
        control={<Checkbox checked={acceptTNC} onChange={handleChange} />}
        label="I accept terms and conditions"
      />
      <Checkbox
        icon={<BookmarkBorderIcon />}
        onChange={handleChange}
        value={acceptTNC}
        checkedIcon={<BookmarkIcon />}
      />
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value={"html"}
                  checked={skills.includes("html")}
                  onChange={handleChecked}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value={"css"}
                  checked={skills.includes("css")}
                  onChange={handleChecked}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  value={"js"}
                  checked={skills.includes("js")}
                  onChange={handleChecked}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
