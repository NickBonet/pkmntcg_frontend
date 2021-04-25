import * as React from "react";
import { shallow } from "enzyme";
import Home from "../pages/index";
import { Typography, Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

describe("Pages", () => {
  describe("Index", () => {
    it("Should render successfully", function () {
      const wrap = shallow(<Home />);
      expect(wrap.find(Typography).at(0).text()).toEqual(
        "Welcome to PTCG Tracker!"
      );
    });

    it("Should render the search bar", function () {
      const wrap = shallow(<Home />);
      const search = wrap.find(SearchBar);
      expect(search).toHaveLength(1);
      expect(search.prop("placeholder")).toEqual("Search for a card");
    });

    // fixing still, WIP
    it("Should adjust grid height on mobile", function () {
      const wrap = shallow(<Home />);
      window.innerWidth = 500;
      window.innerHeight = 300;
      window.dispatchEvent(new Event("resize"));
      wrap.update();
      const grid = wrap.find(Grid).at(0);
      expect(grid.prop("style")).toHaveProperty("minHeight", "67vh");
    });
  });
});
