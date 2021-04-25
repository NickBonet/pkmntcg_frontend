import { mount } from "enzyme";
import Home from "../pages/index";
import { Typography, Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import router from "next/router";

let wrap;

beforeEach(() => {
  wrap = mount(<Home />);
});

afterEach(() => {
  wrap.unmount();
});

jest.mock("next/router", () => require("next-router-mock"));

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

    test("Search bar input changes and button pushes right path", function () {
      const search = wrap.find("input").first();
      search.simulate("change", { target: { value: "charizard" } });
      expect(wrap.find("input").prop("value")).toEqual("charizard");
      wrap.find("button").at(0).simulate("click");
      expect(router).toMatchObject({
        asPath: "/search?query=charizard",
        pathname: "/search",
        query: { query: "charizard" },
      });
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
