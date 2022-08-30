import { shallow } from "enzyme";
import Login from "./Login/Login.js";

describe("<Login/>", () => {
    it('Test checks if App renders with out crashing', () => {
        wrapper = shallow(<Login/>);
        expect(wrapper.exist()).toBe(True);
    });
});