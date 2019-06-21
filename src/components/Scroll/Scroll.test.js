import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

it('expected to render Scroll component', () => {
	expect(shallow(<Scroll />)).toMatchSnapshot();
})