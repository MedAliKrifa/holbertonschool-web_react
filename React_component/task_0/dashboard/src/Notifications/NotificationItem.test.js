import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("Testing the <NotificationItem /> Component", () => {
	
	let wrapper;

	it("<NotificationItem /> is rendered without crashing", () => {
		wrapper = shallow(<NotificationItem />);
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<NotificationItem /> render the correct HTML, by passing type and value props", () => {

		const props = {
			type: "default",
			value: "test",
			html: undefined
		}
		wrapper = shallow(<NotificationItem {...props}/>);
		expect(wrapper.html()).equal(`<li data-priority="${props.type}">test</li>`);
    });
    
    it("<NotificationItem /> render the correct HTML, by passing dummy html props", () => {
		const props = {
			type: "default",
			html: { __html: '<u>test</u>' }
		}
		wrapper = shallow(<NotificationItem {...props}/>);
		expect(wrapper.html()).equal(`<li data-priority="${props.type}"><u>test</u></li>`);
	});

});
