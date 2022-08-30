import { shallow } from 'enzyme';
import React from 'react';
import { NotificationItem } from './NotificationItem';


// Uses shallow to render NotificationItem component
describe('<NotificationItem />', () => {
	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Passes dummy `type` prop to checks the right html rendering', () => {
		const wrapper = shallow(<NotificationItem type="urgent" />);
		expect(wrapper.html()).toContain('urgent');
	})

	it('Passes dummy `value` prop to checks the right html rendering', () => {
		const wrapper = shallow(<NotificationItem value="This is a success notification" />);
		expect(wrapper.find('li').text()).toBe('This is a success notification');
	})

	it('Passes dummy `html` prop to checks the right html rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
	})
})