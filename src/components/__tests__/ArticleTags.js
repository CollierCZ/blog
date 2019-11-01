import React from "react"
import { shallow } from "enzyme"
import ArticleTags from "../ArticleTags"
import { simpleShallowRender } from "../../utilities/testHelpers"

const tags = ["documentation","UX","experience mapping"]

describe("ArticleTags", () => {
  it("renders tags correctly", () => {
    simpleShallowRender(<ArticleTags tags={tags} prefix=" on " />)
  })
})