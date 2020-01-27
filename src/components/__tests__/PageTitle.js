import React from "react";
import { PurePageTitle as PageTitle } from "../PageTitle";
import { simpleRenderer } from "../../utilities/testHelpers";

const siteMetadata = {
  elements: {
  title: {
  value: 'A title'
  }
}
}

describe("PageTitle", () => {
  it("renders correctly with title", () => {
    simpleRenderer(<PageTitle text="work elsewhere" />);
  });
  it("renders correctly with nothing", () => {
    simpleRenderer(<PageTitle siteMetadata={siteMetadata} />);
  });
});
