import React from 'react';
import CounterButton from '../CounterButton/CounterButton';

const Header = () => {
	return (
		<header>
			<h1 class="tc f1 sega t-shadow">RoboFriends</h1>
			<CounterButton color="green"/>
		</header>
	);
}

export default Header;