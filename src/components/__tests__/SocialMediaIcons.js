import React from "react";
import SocialMediaIcons from "../SocialMediaIcons";
import { simpleRenderer } from "../../utilities/testHelpers";

const urlArray = [
  "mailto:aaron@collier.cz",
  "https://github.com/CollierCZ",
  "https://collier.cz/rss.xml"
];

describe("SocialMediaIcons", () => {
  it("renders correctly with URLs", () => {
    simpleRenderer(<SocialMediaIcons urls={urlArray} />);
  });
});
