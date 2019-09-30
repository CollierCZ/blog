import React from "react"
import renderer from "react-test-renderer"
import SocialMediaIcons from "../SocialMediaIcons"

const urlArray = ["mailto:aaron@collier.cz","https://github.com/CollierCZ","https://collier.cz/rss.xml"]


describe("SocialMediaIcons", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SocialMediaIcons urls={urlArray} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})