import React from "react";
import Footer from "../Footer";
import { simpleRenderer } from "../../utilities/testHelpers";

describe("Footer", () => {
  it("renders correctly", () => {
    simpleRenderer(<Footer author="Aaron Collier" />);
  });
});
