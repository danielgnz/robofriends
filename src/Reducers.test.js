import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './Constants.js';

import * as reducers from './Reducers';

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: ''
	}

	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
	})
	
	it('should handle CHANGE_SEARCH_FIELD', () => {
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		}))
		.toEqual({ searchField: 'abc'})
	})
})

describe('requestRobots', () => {
	const initialStateRobots = {
		robots: [],
		isPending: false,
	}
	it('should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual({ robots: [], isPending: false });
	})
	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_PENDING
		}))
		.toEqual({ robots: [], isPending: true })
	})
	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [
				{
					id: 1,
					name: 'TestBot',
					email: 'test@gmail.com'
				}
			]
		}))
		.toEqual(
			{ 
				robots: [
					{
						id: 1,
						name: 'TestBot',
						email: 'test@gmail.com'
					}
				], 
				isPending: false 
			}
		)
	})
	it('should handle REQUEST_ROBOTS_FAILED', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: "Error404"
		}))
		.toEqual({ robots: [], isPending: false, error: "Error404" })
	})
})
