import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../Actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()) // this is the same as requestRobots(dispatch)
	}
}

class App extends Component {
	componentDidMount(){
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		console.log('thisProps', this.props);
		console.log('robots', robots);
		console.log('filteredRobots', filteredRobots);
		return isPending ?
			<h1 className="tc f1 sega t-shadow">Loading...</h1> :
			(
			<div id="main" className="tc">
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);