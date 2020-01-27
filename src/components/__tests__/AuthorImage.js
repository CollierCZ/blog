import React from "react";
import AuthorImage from "../AuthorImage";
import { author } from "../../utilities/TestSampleData";
import { simpleRenderer } from "../../utilities/testHelpers";
import "jest-styled-components";

const authorNoUrl = JSON.parse(JSON.stringify(author));
delete authorNoUrl.url;

const authorNothing = JSON.parse(JSON.stringify(authorNoUrl));
delete authorNothing.picture;

describe("AuthorImage", () => {
  it("renders correctly with all info", () => {
    simpleRenderer(<AuthorImage author={author} />);
  });
  it("renders correctly without url", () => {
    simpleRenderer(<AuthorImage author={authorNoUrl} />);
  });
  it("renders correctly without name or url", () => {
    simpleRenderer(<AuthorImage author={authorNothing} />);
  });
});
