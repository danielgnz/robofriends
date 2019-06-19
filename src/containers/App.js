import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../Actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	componentDidMount(){
		this.props.onRequestRobots();
	}

	render() {
		const { robots, searchField, onSearchChange, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		return (
			 <div id="main" className="tc">
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
				{ 
					isPending
				 	? <h1 className="tc f1 sega t-shadow">Loading...</h1>
				 	: <ErrorBoundary>
						<CardList robots={filteredRobots}/>
					  </ErrorBoundary>
				}
				</Scroll>
			</div>
		);
	}
}

// action done from mapDispatchToProps will change state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);