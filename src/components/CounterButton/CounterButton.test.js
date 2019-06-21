import React from 'react';
import renderer from 'react-test-renderer';
import CounterButton from './CounterButton';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

describe('<CounterButton />', () => {
	
	it('expect to render component', () => {
		const mockColor="blue";
		expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
	})

	it('correctly increments the counter', () => {
		const mockColor="red";
		const wrapper = shallow(<CounterButton color={mockColor} />);
		wrapper.find('[id="counter"]').simulate('click');
		expect(wrapper.state()).toEqual({ count: 1 });
		wrapper.find('[id="counter"]').simulate('click');
		expect(wrapper.state()).toEqual({ count: 2 });
		wrapper.find('[id="counter"]').simulate('keypress');
		expect(wrapper.state()).toEqual({ count: 2 });
	})

	it('should color to props.color', () => {
		const mockColor="red";
		const wrapper = shallow(<CounterButton color={mockColor} />);
		expect(wrapper.props().color).toEqual("red");
	})

	it('checks if the component should update', () => {
		const mockColor="green";
		const wrapper = shallow(<CounterButton color={mockColor} />);
		const instance = wrapper.instance();
		expect(instance.shouldComponentUpdate({color: 'green'}, {count: 0}))
			.toEqual(false);
		expect(instance.shouldComponentUpdate({color: 'green'}, {count: 1}))
			.toEqual(true);
	})
})