import React from "react";
import ArticleTags from "../ArticleTags";
import { clickTextLink, simpleRenderer } from "../../utilities/testHelpers";

const tags = ["documentation", "UX", "experience mapping"];

describe("ArticleTags", () => {
  it("renders tags correctly", () => {
    simpleRenderer(<ArticleTags tags={tags} prefix=" on " />);
  });
  it("has a working link", () => {
    clickTextLink(<ArticleTags tags={tags} prefix=" on " />);
  });
});
