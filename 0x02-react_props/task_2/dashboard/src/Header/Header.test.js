import { shallow } from "enzyme";
import { Header } from "./Header";

describe("<Header/>", () => {
  it("Test checks if App renders with out crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Test check if Header renders <img> and <h1>", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("h1").length).toBe(1);
  });
});
