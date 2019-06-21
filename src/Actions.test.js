import React from 'react';
import { shallow } from 'enzyme';
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './Constants.js';

import { apiCall } from './api/api';
import * as actions from './Actions';
import { mockStore, mockFetch, mockFetchError } from './__mocks__/mock.js';

describe('setSearchField', () => {
	it('should create an action to search robots', () => {
		const text = 'woooo';
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: text
		}
		expect(actions.setSearchField(text)).toEqual(expectedAction);
	})
})

describe('requestRobots', () => {

	it('handles requesting robots API', () => {
		const store = mockStore();
		store.dispatch(actions.requestRobots());
		const action = store.getActions();
		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING,
		}
		expect(action[0]).toEqual(expectedAction);
	})
	const robots = [
			{
				id: 1,
				name: 'daniel',
				email: 'daniel@gmail.com'
			},
			{
				id: 2,
				name: 'maria',
				email: 'maria@gmail.com'
			}
		];
	const URL = 'https://jsonplaceholder.typicode.com/users/';
	it('returns data from the API Call', () => {
		const store = mockStore();
		const apiCall = mockFetch(robots);
		const successAction = {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: robots
		}
		expect.assertions(3);
		return apiCall(URL)
			.then(resp => resp.json())
			.then(data => {
				expect(apiCall.mock.calls.length).toBe(1);
				expect(apiCall).toBeCalledWith(URL);
				store.dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
				expect(store.getActions()[0]).toEqual(successAction);
			})
	})

	it('returns error from the API Call', () => {
			const store = mockStore();
			const failAction = {
				type: REQUEST_ROBOTS_FAILED,
				payload: 'fail'
			}
			const apiCall = mockFetchError(robots);
			expect.assertions(3)
			return apiCall(URL)
				.then(resp => resp.json())
				.then(data => data)
				.catch(err => {
					expect(apiCall.mock.calls.length).toBe(1);
					expect(apiCall).toBeCalledWith(URL);
					store.dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err });
					expect(store.getActions()[0]).toEqual(failAction);
				})
			})
		});