import React from "react"
import { shallow } from "enzyme"
import ArticleTags from "../ArticleTags"

const tags = ["documentation","UX","experience mapping"]

describe("ArticleTags", () => {
  it("renders tags correctly", () => {
    const component = shallow (<ArticleTags tags={tags} prefix=" on " />);
    expect(component).toMatchSnapshot()
  })
  it("renders correctly when empty", () => {
    const component = shallow (<ArticleTags prefix=" on " />);
    expect(component).toMatchSnapshot()
  })
})