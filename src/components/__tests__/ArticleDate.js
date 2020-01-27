import React from "react";
import ArticleDate from "../ArticleDate";
import { simpleRenderer } from "../../utilities/testHelpers";

describe("ArticleDate", () => {
  it("renders correctly", () => {
    simpleRenderer(
      <ArticleDate date="2019-06-03T00:00:00Z" prefix="Published " />
    );
  });
});
