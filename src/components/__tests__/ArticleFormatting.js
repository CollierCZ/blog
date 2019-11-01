import React from "react"
import { shallow } from "enzyme"
import ArticleFormatting from "../ArticleFormatting"
import { simpleShallowRender } from "../../utilities/testHelpers"

describe("ArticleFormatting", () => {
  it("renders correctly", () => {
    simpleShallowRender(<ArticleFormatting children={{test: "value1"}} />)
  })
})