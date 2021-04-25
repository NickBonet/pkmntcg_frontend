import mediaQuery from "css-mediaquery";

// As per MUI docs for polyfilling matchMedia
// https://material-ui.com/components/use-media-query/#testing
global.createMatchMedia = (width) => {
  return (query) => ({
    matches: mediaQuery.match(query, { width: width }),
    addListener: () => {},
    removeListener: () => {},
  });
};
