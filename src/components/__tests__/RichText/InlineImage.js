import React from "react";
import InlineImage from "../../RichText/InlineImage";
import { simpleImage } from "../../../utilities/TestSampleData"
import { simpleRenderer } from "../../../utilities/testHelpers";

describe("InlineImage", () => {
  it("renders correctly", () => {
    simpleRenderer(<InlineImage {...simpleImage} />);
  });
});
