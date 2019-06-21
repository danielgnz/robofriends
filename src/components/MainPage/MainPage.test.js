import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
	}
	wrapper = shallow(<MainPage {...mockProps} />);
})

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
	};
	const robots1 = [
		{
			id: 1,
			name: 'John',
			email: 'john@gmail.com'
		}
	];

	const robots2 = [
		{
			id: 23,
			name: 'Marian',
			email: 'Mar'
		},
		{
			id: 24,
			name: 'Marian323',
			email: 'Mar333'
		},
		{
			id: 10,
			name: 'Marian1223',
			email: 'Mar12323'
		}
	];

	const testProps = {...mockProps, robots: robots2, searchField: 'b'};
	const wrapper1 = shallow(<MainPage {...testProps } />);

	const filteredRobots = [];
	expect(wrapper1.instance().filterRobots()).toEqual(filteredRobots);
})

it('displays Loading... when robots are pending', () => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: true,
	};

	const wrapper2 = shallow(<MainPage {...mockProps} />);
	const scrollWrapper = wrapper2.find(Scroll);

	expect(scrollWrapper.find('.loading')).toHaveLength(1);
	expect(scrollWrapper.find(ErrorBoundary)).toHaveLength(0);
})