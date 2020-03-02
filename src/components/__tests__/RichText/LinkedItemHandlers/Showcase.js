import React from "react";
import Showcase from "../../../RichText/LinkedItemHandlers/Showcase";
import { sampleShowcase } from "../../../../utilities/TestSampleData";
import { simpleRenderer } from "../../../../utilities/testHelpers";
import { mount } from "enzyme";

describe("Showcase", () => {
  beforeAll(() => {
    delete window.location;
    window.location = { assign: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  it("renders correctly", () => {
    simpleRenderer(<Showcase showcase={sampleShowcase} />);
  });
  it("can be clicked", () => {
    mount(<Showcase showcase={sampleShowcase} />)
      .find('[role="button"]')
      .first()
      .simulate("click");
  });
});
