import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blueGrey,
  },
});

export default theme;
