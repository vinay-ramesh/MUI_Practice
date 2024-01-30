import { Home, Person, Favorite } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
// Bottom navigation component helps in Tablet and Mobile Layouts and is used to switch between primary destination in application
const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: "0" }}
      value={value}
      onChange={(e, newVal) => setValue(newVal)}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favourites" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
