import React from "react"
import { shallow } from "enzyme"
import ArticleHeader from "../ArticleHeader"
import { simpleShallowRender } from "../../utilities/testHelpers"

describe("ArticleFormating", () => {
  it("renders correctly", () => {
    simpleShallowRender(<ArticleHeader children={{test: "value1"}} />)
  })
})