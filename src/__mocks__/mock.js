import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

export const mockStore = configureMockStore([thunkMiddleware]);

export const mockFetch = (data) => jest.fn().mockReturnValue(Promise.resolve({
	json: () => Promise.resolve(data)
}));

export const mockFetchError = (data) => jest.fn().mockReturnValue(Promise.reject('fail')
		.then(function() {
			// not called
		}), function (error) {
			console.log(error);
		});