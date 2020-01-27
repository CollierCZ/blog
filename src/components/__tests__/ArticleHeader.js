import React from "react";
import ArticleHeader from "../ArticleHeader";
import { simpleRenderer } from "../../utilities/testHelpers";

describe("ArticleFormating", () => {
  it("renders correctly", () => {
    simpleRenderer(<ArticleHeader children={'This is a test'} />);
  });
});
