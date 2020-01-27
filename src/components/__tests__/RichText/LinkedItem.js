import React from "react";
import LinkedItem from "../../RichText/LinkedItem";
import { sampleQuote, sampleShowcase } from "../../../utilities/TestSampleData"
import { simpleRenderer } from "../../../utilities/testHelpers";

const unmatchedType = {
  system: {
    type: 'wacky'
  }
}

describe("LinkedItem", () => {
  it("renders a quote correctly", () => {
    simpleRenderer(<LinkedItem linkedItem={sampleQuote} />);
  });
  it("renders a showcase correctly", () => {
    simpleRenderer(<LinkedItem linkedItem={sampleShowcase} />);
  });
  it("renders null when no match", () => {
    simpleRenderer(<LinkedItem linkedItem={unmatchedType} />);
  });
});

