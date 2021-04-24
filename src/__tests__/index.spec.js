import * as React from "react";
import { shallow } from "enzyme";
import Home from "../pages/index";
import { Typography } from "@material-ui/core";

describe("Pages", () => {
  describe("Index", () => {
    it("Should render successfully", function () {
      const wrap = shallow(<Home />);
      expect(wrap.find(Typography).at(0).text()).toEqual(
        "Welcome to PTCG Tracker!"
      );
    });
  });
});
