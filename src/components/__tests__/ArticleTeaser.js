import React from "react"
import ArticleTeaser from "../ArticleTeaser"
import { simpleShallowRender } from "../../utilities/testHelpers"

const cover = "https://example.com/cool_image.png"
const link = "/articles/cool-article"

describe("ArticleTeaser", () => {
  it("renders correctly", () => {
    simpleShallowRender(<ArticleTeaser cover={cover} link={link} />)
  })
})