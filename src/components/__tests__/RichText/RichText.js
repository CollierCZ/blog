import React from "react";
import RichText from "../../RichText/RichText";
import { clickTextLink, simpleRenderer } from "../../../utilities/testHelpers";

const textWithLinks = {
  content:
    '<p>Read a <a data-item-id="3cc9d486-53e2-495d-9e2b-25665e0ff29f" href="">text version of the talk</a> I gave at the <a href="http://www.writethedocs.org/conf/prague/2019/">Write the Docs Prague 2019</a> conference.</p>',
  images: [],
  links: [
    {
      linkId: "3cc9d486-53e2-495d-9e2b-25665e0ff29f",
      urlSlug: "seeing-your-docs-through-different-eyes",
      type: "article",
      codename: "write_the_docs_2019"
    }
  ],
  linkedItems: []
};

const textWithHeading =
  "<h2>An awesome heading</h2><p>A video of a talk I gave</p>";

const textWithImage = {
  content:
    '<p>An awesome intro</p><figure data-asset-id="d11df065-aadc-4bb4-881d-c0ee5f13d2ad" data-image-id="d11df065-aadc-4bb4-881d-c0ee5f13d2ad"><img src="https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/18b254b8-ee42-42ca-9c5a-9105fa9a473d/Slide6.PNG" data-asset-id="d11df065-aadc-4bb4-881d-c0ee5f13d2ad" data-image-id="d11df065-aadc-4bb4-881d-c0ee5f13d2ad" alt="A map of an experience of a plane trip from London To New York."></figure>',
  images: [
    {
      description:
        "A map of an experience of a plane trip from London To New York.",
      url:
        "https://assets-us-01.kc-usercontent.com:443/3fcf700a-30e8-4d1d-9e64-43193a89fe7a/18b254b8-ee42-42ca-9c5a-9105fa9a473d/Slide6.PNG",
      imageId: "d11df065-aadc-4bb4-881d-c0ee5f13d2ad"
    }
  ]
};

const textWithLinkedItem = {
  content:
    '<p>An intro to a component.</p>\n<p type="application/kenticocloud" data-type="item" data-rel="component" data-codename="d03cd933_61c3_01aa_c928_be6bcd158c5a" data-sdk-resolved="1" class="kc-linked-item-wrapper"></p>',
  images: [],
  links: [],
  linkedItems: [
    {
      id: "0afa8bf7-ba80-5a4d-8b31-597de005dab4",
      system: {
        codename: "d03cd933_61c3_01aa_c928_be6bcd158c5a",
        type: "quote"
      },
      elements: {
        quote: {
          resolvedData: {
            html:
              "<p>You never really understand a person until you consider things from [their] point of view — until you climb into [their] skin and walk around in it.</p>"
          }
        },
        source: {
          resolvedData: {
            html:
              "<p>Atticus Finch in <em>To Kill a Mockingbird </em>by Harper Lee</p>"
          }
        }
      }
    }
  ]
};

const textWithList = {
  content:
    "<ul><li>A video of a talk I gave at the Write the Docs Prague 2019 conference.</li><li> Or read a text version of the talk.</li></ul>",
  images: [],
  links: [],
  linkedItems: []
};

const textWithListWithLinks = {
  content:
    '<ul><li>A video of a talk I gave at the <a href="http://www.writethedocs.org/conf/prague/2019/">Write the Docs Prague 2019</a> conference.</li><li> Or read a text version of the talk.</li></ul>',
  images: [],
  links: [],
  linkedItems: []
};

describe("RichText", () => {
  it("correctly returns null on empty", () => {
    simpleRenderer(<RichText content={''}/>);
  });
  it("renders correctly with links", () => {
    simpleRenderer(<RichText {...textWithLinks} />);
  });
  it("renders a working internal link correctly", () => {
    clickTextLink(<RichText {...textWithLinks} />);
  });
  it("renders correctly with a heading", () => {
    simpleRenderer(<RichText content={textWithHeading} />);
  });
  it("renders correctly with an image", () => {
    simpleRenderer(<RichText {...textWithImage} />);
  });
  it("renders correctly with a linked item", () => {
    simpleRenderer(<RichText {...textWithLinkedItem} />);
  });
  it("renders correctly with a simple list", () => {
    simpleRenderer(<RichText {...textWithList} />);
  });
  it("renders correctly with a list with links", () => {
    simpleRenderer(<RichText {...textWithListWithLinks} />);
  });
});
