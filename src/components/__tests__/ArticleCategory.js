import React from "react";
import ArticleCategory from "../ArticleCategory";
import { clickTextLink, simpleRenderer } from "../../utilities/testHelpers";

describe("ArticleCategory", () => {
  it("renders correctly", () => {
    simpleRenderer(<ArticleCategory category="Education" prefix=" in " />);
  });
  it("has a working link", () => {
    clickTextLink(<ArticleCategory category="Education" prefix=" in " />);
  });
});
