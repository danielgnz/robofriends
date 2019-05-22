import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users/')
		.then(response => response.json())
		.then(users => this.setState({ robots: users }));
	}

	handleSearchChange(e) {
		this.setState({
			searchfield: e.target.value
		})
	}

	render() {
		// if(this.state.robots.length === 0){
		// 	return <h1>Loading</h1>
		// }
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});

		return !robots.length ? 
			<h1 className="tc f1 sega t-shadow">Loading...</h1> :
			(
			<div id="main" className="tc">
				<SearchBox searchChange={this.handleSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		)
	}
}

export default App;