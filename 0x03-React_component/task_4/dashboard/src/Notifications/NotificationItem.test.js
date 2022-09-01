import { shallow } from 'enzyme';
import React from 'react';
import { createFileLevelUniqueName } from 'typescript';
import { NotificationItem } from './NotificationItem';


// Uses shallow to render NotificationItem component
describe('Test NotificationItem.js', () => {
	it('Notificacionitem without crashing', (done) => {
	  expect(shallow(<NotificationItem />).exists());
	  done();
	});
  
	it('renders three list items', (done) => {
	  const wrapper = shallow(<NotificationItem type='default' value='test' />);
	  expect(wrapper.find('li')).toHaveLength(1);
	  expect(wrapper.find('li').props()).toHaveProperty('data-notification-type', 'default');
	  expect(wrapper.find('li').text()).toEqual('test');
	  done();
	});
  
	it('renders inner HTML', (done) => {
	  const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
	  expect(wrapper.html().indexOf('<li data-notification-type="default"><u>test</u></li>')).not.toBe(-1);
	  done();
	});
  it('check markAsRead gets the rigth args', (done) => {
    const id = 10;
    const fakeMarkAsRead = jest.fn();

    const wrapper = shallow(<NotificationItem id={id} markAsRead={fakeMarkAsRead}/>);
    wrapper.find('li').simulate('click');

    expect(fakeMarkAsRead.mock.calls.length).toBe(1);
    expect(fakeMarkAsRead).toHaveBeenCalledWith(id);
    done();
  });

  });
  

