import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

it('expected to render ErrorBoundary component', () => {
	expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
})
it('checks if component did catch error', () => {
	const wrapper = shallow(<ErrorBoundary />);
	expect(wrapper.state()).toEqual({ hasError: false });
	wrapper.instance().componentDidCatch(Error, "error404");
	expect(wrapper.state()).toEqual({ hasError: true });
})