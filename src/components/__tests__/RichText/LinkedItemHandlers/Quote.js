import React from "react";
import Quote from "../../../RichText/LinkedItemHandlers/Quote";
import { sampleQuote } from "../../../../utilities/TestSampleData"
import { simpleRenderer } from "../../../../utilities/testHelpers";

describe("Quote", () => {
  it("renders a quote correctly", () => {
    simpleRenderer(<Quote quote={sampleQuote} />);
  });
});