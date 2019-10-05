import React from "react"
import { shallow } from "enzyme"
import Footer from "../Footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const component = shallow (<Footer author="Aaron Collier" />)
    expect(component).toMatchSnapshot()
  })
})