import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Testing the <Notifications /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Notifications />);
	});

	it("<Notifications /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<Notifications /> renders three NotificationItem", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find('NotificationItem')).to.have.lengthOf(3);
	});

	it("<Notifications /> render the text 'Here is the list of notifications'", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
	});

	it("<Notifications /> renders the first <NotificationItem /> element with the right HTML", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find('ul').childAt(0).html()).to.equal('<li data-priority="default">New course available</li>');
	});

	it("<Notifications /> the menu item is being displayed when displayDrawer is false", () => {
		expect(wrapper.find('div.menuItem')).to.have.length(1);
	});

	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		expect(wrapper.find('div.Notifications')).to.have.length(0);
	});

	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find('div.menuItem')).to.have.length(1);
	});

	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find('div.Notifications')).to.have.length(1);
	});

});
