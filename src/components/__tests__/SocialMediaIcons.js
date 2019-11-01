import React from "react"
import { shallow } from "enzyme"
import SocialMediaIcons from "../SocialMediaIcons"
import { simpleShallowRender } from "../../utilities/testHelpers"

const urlArray = ["mailto:aaron@collier.cz","https://github.com/CollierCZ","https://collier.cz/rss.xml"]

describe("SocialMediaIcons", () => {
  it("renders correctly with URLs", () => {
    simpleShallowRender(<SocialMediaIcons urls={urlArray} />)
  })
})