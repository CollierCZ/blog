import React from "react";
import ArticleFooter from "../ArticleFooter";
import { simpleRenderer } from "../../utilities/testHelpers";

describe("ArticleFooter", () => {
  it("renders correctly", () => {
    simpleRenderer(<ArticleFooter children={'This is a test'} />);
  });
});
