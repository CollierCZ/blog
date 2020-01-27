import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { navigate } from "gatsby";

export const simpleRenderer = component => {
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
};
export const clickTextLink = component => {
  const mountedComponent = mount(component);
  mountedComponent
    .find("a")
    .first()
    .simulate("click");
  expect(navigate).toHaveBeenCalled();
};
