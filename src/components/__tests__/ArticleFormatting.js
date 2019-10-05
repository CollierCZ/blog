import React from "react"
import { shallow } from "enzyme"
import ArticleFormatting from "../ArticleFormatting"

describe("ArticleFormatting", () => {
  it("renders correctly", () => {
    const component = shallow (<ArticleFormatting children={{test: "value1"}} />);
    expect(component).toMatchSnapshot()
  })
})