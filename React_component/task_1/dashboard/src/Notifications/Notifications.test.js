import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

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
		expect(wrapper.find('NotificationItem')).to.have.lengthOf(0);
	});

	it("<Notifications /> render the text 'Here is the list of notifications'", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
	});

	it("<Notifications /> renders the first <NotificationItem /> element with the right HTML", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('ul').childAt(0).html()).to.equal('<li data-priority="default">New course available</li>');
	});

	it("<Notifications /> the menu item is being displayed when displayDrawer is false", () => {
		expect(wrapper.find('div.menuItem')).to.have.length(1);
	});

	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		expect(wrapper.find('div.Notifications')).to.have.length(0);
	});

	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('div.menuItem')).to.have.length(1);
	});

	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('div.Notifications')).to.have.length(1);
	});

	it("Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property", () => {
		wrapper = shallow(<Notifications/>);
		expect(wrapper).to.not.be.an('undefined');
	});

	it("the component renders it correctly and with the right number of NotificationItem", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('NotificationItem')).to.have.length(3);
	});

	it("listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.contains(<p>No new notification for now</p>)).to.equal(true);
	});

});
