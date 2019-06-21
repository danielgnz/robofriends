import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './MainPage.css';

class MainPage extends Component {

	componentDidMount(){
		this.props.onRequestRobots();
	}

	filterRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		});
	}

	render() {
		const { onSearchChange, isPending } = this.props;
		return (
			 <div id="main" className="tc">
			 	<Header />
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
				{ 
					isPending
				 	? <h1 className="loading tc f1 sega t-shadow">Loading...</h1>
				 	: <ErrorBoundary>
						<CardList robots={this.filterRobots()} />
					  </ErrorBoundary>
				}
				</Scroll>
			</div>
		);
	}
}
	MainPage.propTypes = {
		robots: PropTypes.array.isRequired,
		onRequestRobots: PropTypes.func.isRequired,
		searchField: PropTypes.string.isRequired,
		onSearchChange: PropTypes.func,
		isPending: PropTypes.bool.isRequired,
	};

export default MainPage;