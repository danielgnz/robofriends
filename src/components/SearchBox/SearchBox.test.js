import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('expected to render SearchBox component', () => {
	expect(shallow(<SearchBox />)).toMatchSnapshot();
})