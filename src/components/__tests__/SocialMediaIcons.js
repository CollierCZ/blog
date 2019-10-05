import React from "react"
import { shallow } from "enzyme"
import SocialMediaIcons from "../SocialMediaIcons"

const urlArray = ["mailto:aaron@collier.cz","https://github.com/CollierCZ","https://collier.cz/rss.xml"]

describe("SocialMediaIcons", () => {
  it("renders correctly with URLs", () => {
    const component = shallow (<SocialMediaIcons urls={urlArray} />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly when empty", () => {
    const component = shallow (<SocialMediaIcons />)
    expect(component).toMatchSnapshot()
  })
})