import React from "react"
import { shallow } from "enzyme"
import ArticleDate from "../ArticleDate"
import { simpleShallowRender } from "../../utilities/testHelpers";

describe("ArticleDate", () => {
  it("renders correctly", () => {
    simpleShallowRender(<ArticleDate date="2019-06-03T00:00:00Z" prefix="Published " />)
  })
})