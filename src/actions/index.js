import axios from 'axios';
import { FETCH_USERS } from './types';
import { CHANGE_AUTH } from './types';

export function fetchUsers() {
	const request = axios.get('http://jsonplaceholder.typicode.com/users');

	return {
		type: FETCH_USERS,
		payload: request
	};
}

export function authenticate(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	};
}