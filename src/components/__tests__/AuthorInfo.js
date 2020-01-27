import React from "react";
import AuthorInfo from "../AuthorInfo";
import { author } from "../../utilities/TestSampleData";
import { clickTextLink, simpleRenderer } from "../../utilities/testHelpers";

describe("AuthorInfo", () => {
  it("renders correctly", () => {
    simpleRenderer(<AuthorInfo author={author} />);
  });
  it("has a working link", () => {
    clickTextLink(<AuthorInfo author={author} />)
  });
});
