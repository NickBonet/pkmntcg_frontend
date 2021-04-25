import { mount } from "enzyme";
import Search from "../pages/search";
import { Typography, Grid } from "@material-ui/core";
import router from "next/router";

let wrap;
const data = require("./searchData.json");

jest.mock("next/router", () => require("next-router-mock"));

beforeEach(() => {
  router.query = { query: "groudon ex" };
  wrap = mount(<Search res={data} />);
});

afterEach(() => {
  wrap.unmount();
});

// TODO: stub out the pokemon API call, test getServerSideProps
describe("Pages", () => {
  describe("Search", () => {
    it("Should render sucessfully and load 4 card images", () => {
      expect(wrap.find(Typography).at(0).text()).toEqual(
        "Search results for: Groudon ex"
      );
      expect(wrap.find("img")).toHaveLength(4);
    });
  });

  describe("Search on mobile", () => {
    beforeAll(() => {
      // eslint-disable-next-line no-undef
      window.matchMedia = createMatchMedia(600);
    });

    it("Should render cards at a reduced image size", () => {
      expect(wrap.find("img").first().prop("width")).toEqual(246 * 0.8);
      expect(wrap.find("img").first().prop("height")).toEqual(342 * 0.8);
    });

    it("Should render card grid elements with modified columns/padding", () => {
      expect(wrap.find(Grid).at(3).prop("xs")).toEqual(6);
      expect(wrap.find(Grid).at(3).prop("sm")).toEqual(4);
      expect(wrap.find(Grid).first().prop("style")).toHaveProperty(
        "paddingLeft",
        "4vw"
      );
      expect(wrap.find(Grid).first().prop("style")).toHaveProperty(
        "paddingRight",
        "2vw"
      );
    });
  });
});
