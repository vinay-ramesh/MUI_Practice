import "./App.css";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiBoxLayout from "./components/MuiLayout";
import MuiRating from "./components/MuiRating";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiSelect from "./components/MuiSelect";
import MuiButtons from "./components/MuiButtons";
import MuiTextFields from "./components/MuiTextFields";
import { MuiTypography } from "./components/MuiTypography";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavBar from "./components/MuiNavBar";
import MuiLink from "./components/MuiLink";
import MuiBreadCrumbs from "./components/MuiBreadCrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/MuiList";
import MuiChip from "./components/MuiChip";
import MuiTooltip from "./components/MuiTooltip";
import MuiTable from "./MuiTable";
import MuiAlert from "./components/MuiAlert";
import MuiSnackBar from "./components/MuiSnackBar";
import MuiDialogue from "./components/MuiDialogue";
import MuiProgress from "./components/MuiProgress";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiLoadingButton from "./components/MuiLoadingButton";
import { LocalizationProvider } from '@mui/x-date-pickers-pro'; // only with pro date picker components
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns'// only with pro date picker components
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import MuiPicker from "./components/MuiPicker";
import DaterangePicker from "./components/DaterangePicker";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonry from "./components/MuiMasonry";
import MuiResponsiveness from "./components/MuiResponsiveness";
import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
})
function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypography />
      <hr />
      <MuiButtons />
      <hr />
      <MuiTextFields />
      <hr />
      <MuiSelect />
      <hr />
      <MuiRadioButton />
      <hr />
      <MuiCheckbox />
      <hr />
      <MuiSwitch />
      <hr />
      <MuiRating />
      <hr />
      <MuiAutoComplete />
      <hr /> */}
        {/* <MuiBoxLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavBar /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadCrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* {<MuiAvatar />} */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackBar /> */}
        {/* <MuiDialogue /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiPicker /> */}
        {/* <DaterangePicker /> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeline /> */}
        {/* <MuiMasonry /> */}
        <MuiResponsiveness />
      </div>
    </ThemeProvider>

    // </LocalizationProvider>
  );
}

export default App;
