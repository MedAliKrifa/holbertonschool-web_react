import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe("Testing the <CourseList /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CourseList />);
	});

	it("<CourseList /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<CourseList /> renders three NotificationItem", () => {
		expect(wrapper.find('CourseListRow')).to.have.lengthOf(5);
	});

});
