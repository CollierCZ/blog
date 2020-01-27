import React from "react";
import ArticleTeaser from "../ArticleTeaser";
import { simpleRenderer } from "../../utilities/testHelpers";

const cover = "https://example.com/cool_image.png";
const link = "/articles/cool-article";

describe("ArticleTeaser", () => {
  it("renders correctly", () => {
    simpleRenderer(<ArticleTeaser cover={cover} link={link} />);
  });
});
