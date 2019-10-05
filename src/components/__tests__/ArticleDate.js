import React from "react"
import { shallow } from "enzyme"
import ArticleDate from "../ArticleDate"

describe("ArticleDate", () => {
  it("renders correctly", () => {
    const component = shallow (<ArticleDate date="2019-06-03T00:00:00Z" prefix="Published " />)
    expect(component).toMatchSnapshot()
  })
})