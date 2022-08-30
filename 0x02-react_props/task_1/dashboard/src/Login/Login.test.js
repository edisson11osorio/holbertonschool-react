import { shallow } from "enzyme";
import { Login } from "./Login.js";

describe("<Login/>", () => {
  it("Test checks if Login renders with out crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Test checks if Login renders <input> and <label> tag", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(2);
    expect(wrapper.find("label").length).toBe(2);
  });
});
