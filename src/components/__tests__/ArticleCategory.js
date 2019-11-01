import React from "react"
import { shallow } from "enzyme"
import ArticleCategory from "../ArticleCategory"
import { simpleShallowRender } from "../../utilities/testHelpers";

describe("ArticleCategory", () => {
  it("renders a category correctly", () => {
    simpleShallowRender(<ArticleCategory category="Education" prefix=" in " />);
  })
})