import React from "react"
import { shallow } from "enzyme"
import Footer from "../Footer"
import { simpleShallowRender } from "../../utilities/testHelpers"

describe("Footer", () => {
  it("renders correctly", () => {
    simpleShallowRender(<Footer author="Aaron Collier" />)
  })
})