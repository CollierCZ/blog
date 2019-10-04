import React from "react"
import renderer from "react-test-renderer"
import ArticleCategory from "../ArticleCategory"

describe("ArticleCategory", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ArticleCategory category="Education" prefix=" in " />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})