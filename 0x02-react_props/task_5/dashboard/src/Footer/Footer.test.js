import { shallow } from "enzyme";
import { Footer } from "./Footer";

describe("<Footer/>", () => {
  it("Test checkes if Footer renders with out crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Test checkes if Footer a last call renders "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
});
