import React from "react"
import renderer from "react-test-renderer"
import { PureSEO as SEO} from "../SEO"


describe("SEO", () => {
  it("renders correctly", () => {
    const data = {
        kenticoCloudItemHome: {
            elements: {
              title: {
                value: "Aaron Collier"
              },
              splash_image: {
                assets: [
                  {
                    url: "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/259d5f15-d354-4701-a299-91cbb7cdf8ce/the-trees-in-the-fall-2052252_640.jpg"
                  }
                ]
              },
              blog_logo: {
                assets: [
                  {
                    url: "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/8af6ebfc-b92f-4603-90f5-5d3dda5d8c3d/quixote-small.jpg"
                  }
                ]
              },
              metadata__description: {
                value: "Articles and interesting things."
              },
              socialmedia: {
                value: "mailto:aaron@collier.cz,https://github.com/CollierCZ,https://collier.cz/rss.xml"
              },
              base_url: {
                value: "https://collier.cz"
              }
            }
          }
    }

    const tree = renderer
        .create(<SEO data={data} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})