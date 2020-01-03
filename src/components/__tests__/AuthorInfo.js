import React from "react"
import AuthorInfo from "../AuthorInfo"
import { simpleShallowRender } from "../../utilities/testHelpers"
import { author } from "../../utilities/TestSampleData"

describe("AuthorInfo", () => {
  it("renders correctly", () => {
    simpleShallowRender(<AuthorInfo author={author} />)
  })
})