import * as actionTypes from './actionTypes';

export const increment = () => dispatch => {
	dispatch({
		type: actionTypes.INCREMENT
	});
};

export const decrement = () => dispatch => {
	dispatch({
		type: actionTypes.DECREMENT
	});
};

// export const increment = () => {
// 	return {
// 		type: actionTypes.INCREMENT
// 	};
// };

// export const decrement = () => {
// 	return {
// 		type: actionTypes.DECREMENT
// 	};
// };

export const add = value => dispatch => {
	dispatch({
		type: actionTypes.ADD,
		payload: value
	});
};

// export const add = value => {
// 	return {
// 		type: actionTypes.ADD,
// 		val: value
// 	};
// };

export const subtract = value => dispatch => {
	dispatch({
		type: actionTypes.SUBTRACT,
		payload: value
	});
};

// export const subtract = value => {
// 	return {
// 		type: actionTypes.SUBTRACT,
// 		val: value
// 	};
// };
