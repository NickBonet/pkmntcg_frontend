import { mount } from "enzyme";
import Home from "../pages/index";
import { Typography, Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import mediaQuery from "css-mediaquery";

// As per MUI docs for polyfilling matchMedia
// https://material-ui.com/components/use-media-query/#testing
function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width: width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

let wrap;

beforeEach(() => {
  wrap = mount(<Home />);
});

afterEach(() => {
  wrap.unmount();
});

describe("Pages", () => {
  describe("Index", () => {
    it("Should render successfully", function () {
      expect(wrap.find(Typography).at(0).text()).toEqual(
        "Welcome to PTCG Tracker!"
      );
    });

    it("Should render the search bar on desktop", function () {
      const search = wrap.find(SearchBar);
      expect(search).toHaveLength(1);
      expect(search.prop("placeholder")).toEqual("Search for a card");
      expect(search.prop("style")).toHaveProperty("maxWidth", "35vw");
    });

    it("Should adjust grid height on desktop", function () {
      const grid = wrap.find(Grid).at(0);
      expect(grid.prop("style")).toHaveProperty("minHeight", "76vh");
    });
  });

  describe("Index on mobile", () => {
    beforeAll(() => {
      window.matchMedia = createMatchMedia(600);
    });

    it("Should adjust grid height on mobile", function () {
      const grid = wrap.find(Grid).at(0);
      expect(grid.prop("style")).toHaveProperty("minHeight", "67vh");
    });

    it("Should render the search bar on mobile", function () {
      const search = wrap.find(SearchBar);
      expect(search).toHaveLength(1);
      expect(search.prop("placeholder")).toEqual("Search for a card");
      expect(search.prop("style")).toHaveProperty("maxWidth", "92vw");
    });
  });
});
