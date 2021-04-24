import useMediaQuery from "@material-ui/core/useMediaQuery";

// Very rudimentary function to scale certain UI elements for mobile.
export function isMobile(theme) {
  return useMediaQuery(theme.breakpoints.down("sm"));
}
