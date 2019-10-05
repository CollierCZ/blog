import React from "react"
import { shallow } from "enzyme"
import ArticleCategory from "../ArticleCategory"

describe("ArticleCategory", () => {
  it("renders a category correctly", () => {
    const component = shallow (<ArticleCategory category="Education" prefix=" in " />);
    expect(component).toMatchSnapshot()
  })
  it("renders correctly when empty", () => {
    const component = shallow (<ArticleCategory prefix=" in " />);
    expect(component).toMatchSnapshot()
  })
})