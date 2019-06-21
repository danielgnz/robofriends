import React from 'react';
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';
import Card from './Card';

it('expect to render Card Component', () => {
	expect(shallow(<Card />)).toMatchSnapshot();
})

// mount unlike shallow rendering, does a full render
// actually mounts the component on a DOM
// just like React does

// render is used to render React components but
// unlike a real DOM, it's rendered to a static HTML
// returns sth similar to shallow and mount
// but uses a Cheerio library underneath the hood
// renders Cards children if you need to test those