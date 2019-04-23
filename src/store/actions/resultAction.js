import * as actionTypes from './actionTypes';

export const saveResult = res => dispatch => {
	dispatch({
		type: actionTypes.STORE_RESULT,
		payload: res
	});
};

export const storeResult = res => dispatch => {
	setTimeout(() => {
		dispatch(saveResult(res));
	}, 2000);
};

export const deleteResult = resElId => dispatch => {
	dispatch({
		type: actionTypes.DELETE_RESULT,
		payload: resElId
	});
};
