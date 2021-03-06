import React from "react";
import { PureSeo as Seo } from "../Seo";
import { simpleRenderer } from "../../utilities/testHelpers";

const homeQuery = {
  elements: {
    title: {
      value: "Aaron Collier"
    },
    splash_image: {
      value: [
        {
          url:
            "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/259d5f15-d354-4701-a299-91cbb7cdf8ce/the-trees-in-the-fall-2052252_640.jpg"
        }
      ]
    },
    blog_logo: {
      value: [
        {
          url:
            "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/8af6ebfc-b92f-4603-90f5-5d3dda5d8c3d/quixote-small.jpg"
        }
      ]
    },
    metadata__description: {
      value: "Articles and interesting things."
    },
    socialmedia: {
      value:
        "mailto:aaron@collier.cz,https://github.com/CollierCZ,https://collier.cz/rss.xml"
    },
    base_url: {
      value: "https://collier.cz"
    }
  }
};

const articleProps = {
  articlePath: "home",
  articleNode: {
    elements: {
      title: {
        value: "Home title"
      },
      metadata__description: {
        value: "An interesting description"
      },
      teaser: {
        value: [
          {
            url: "https://example.com"
          }
        ]
      }
    }
  }
};

describe("Seo", () => {
  it("renders correctly with no article data", () => {
    simpleRenderer(<Seo basicInfo={homeQuery} />);
  });
  it("renders correctly with article data", () => {
    simpleRenderer(<Seo basicInfo={homeQuery} articleProps={articleProps} />);
  });
});
