import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('expected to render Header component', () => {
	expect(shallow(<Header />)).toMatchSnapshot();
})