import { shallow } from "enzyme"

export const simpleShallowRender = (component) => {
  const wrapper = shallow (component)
  expect(wrapper).toMatchSnapshot()
}