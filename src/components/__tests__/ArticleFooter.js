import React from "react"
import { shallow } from "enzyme"
import ArticleFooter from "../ArticleFooter"
import { simpleShallowRender } from "../../utilities/testHelpers"

describe("ArticleFooter", () => {
  it("renders correctly", () => {
    simpleShallowRender(<ArticleFooter children={{test: "value1"}} />)
  })
})