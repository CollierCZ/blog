import React from "react"
import { shallow } from "enzyme"
import ReadNext, { ReadNextStory } from "../ReadNext"

const article = {
    title: "How I built and deployed this site for free",
    cover: "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/38bbc989-70ab-4661-92cf-11efafa5ab09/sunset-219354_1920.jpg",
    path: "how-i-built-and-deployed-this-site-for-free",
    excerpt: "How I built a modern static site at no cost using Gatsby and Kentico Kontent for Content as a Service."
}
const articleNoCover = {
  title: "How I built and deployed this site for free",
  path: "how-i-built-and-deployed-this-site-for-free",
  excerpt: "How I built a modern static site at no cost using Gatsby and Kentico Kontent for Content as a Service."
}

describe("ReadNext", () => {
  it("renders correctly with articles with and without covers", () => {
    const component = shallow(<ReadNext next={article} prev={articleNoCover} />)
    expect(component).toMatchSnapshot()
  })
})

describe("ReadNextStory", () => {
  it("renders correctly with articles with cover", () => {
    const component = shallow(<ReadNextStory article={article} text="Read This Next" />)
    expect(component).toMatchSnapshot()
  })
  it("renders correctly with articles with no cover", () => {
    const component = shallow(<ReadNextStory article={articleNoCover} text="Read This Next" />)
    expect(component).toMatchSnapshot()
  })
})