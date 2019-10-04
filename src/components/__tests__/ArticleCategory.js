import React from "react"
import renderer from "react-test-renderer"
import ArticleCategory from "../ArticleCategory"

describe("ArticleCategory", () => {
  it("renders a category correctly", () => {
    const tree = renderer
      .create(<ArticleCategory category="Education" prefix=" in " />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders correctly when empty", () => {
    const tree = renderer
      .create(<ArticleCategory prefix=" in " />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})