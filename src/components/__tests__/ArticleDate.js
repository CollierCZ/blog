import React from "react"
import renderer from "react-test-renderer"
import ArticleDate from "../ArticleDate"

const urlArray = ["mailto:aaron@collier.cz","https://github.com/CollierCZ","https://collier.cz/rss.xml"]


describe("ArticleDate", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ArticleDate date="2019-06-03T00:00:00Z" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})