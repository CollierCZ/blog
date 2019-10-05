import React from "react"
import { shallow } from "enzyme"
import ArticleHeader from "../ArticleHeader"

describe("ArticleFormating", () => {
  it("renders correctly", () => {
    const component = shallow (<ArticleHeader children={{test: "value1"}} />);
    expect(component).toMatchSnapshot()
  })
})