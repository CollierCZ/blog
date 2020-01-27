import React from "react";
import ArticleFormatting from "../ArticleFormatting";
import { simpleRenderer } from "../../utilities/testHelpers";

describe("ArticleFormatting", () => {
  it("renders correctly", () => {
    simpleRenderer(<ArticleFormatting children={'This is a test'} />);
  });
});
