import React from "react"
import { shallow } from "enzyme"
import ArticleFooter from "../ArticleFooter"

describe("ArticleFooter", () => {
  it("renders correctly", () => {
    const component = shallow (<ArticleFooter children={{test: "value1"}} />);
    expect(component).toMatchSnapshot()
  })
})