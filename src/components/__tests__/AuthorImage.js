import React from "react"
import AuthorImage from "../AuthorImage"
import { simpleShallowRender } from "../../utilities/testHelpers"
import { author } from "../../utilities/TestSampleData"

const authorNoUrl = JSON.parse(JSON.stringify(author))
delete authorNoUrl.url

const authorNothing = JSON.parse(JSON.stringify(authorNoUrl))
delete authorNothing.picture

describe("AuthorImage", () => {
  it("renders correctly with all info", () => {
    simpleShallowRender(<AuthorImage author={author} />)
  })
  it("renders correctly without url", () => {
    simpleShallowRender(<AuthorImage author={authorNoUrl} />)
  })
  it("renders correctly without name or url", () => {
    simpleShallowRender(<AuthorImage author={authorNothing} />)
  })
})