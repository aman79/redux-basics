import * as actionType from '../actions/actionTypes';
import { updatedObject } from '../../store/utility';

const initialState = {
	results: []
};

const deleteResult = (state, action) => {
	const updatedArr = state.results.filter(
		result => result.id !== action.payload
	);
	return updatedObject(state, { results: updatedArr });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.STORE_RESULT:
			return updatedObject(state, {
				results: state.results.concat({ id: new Date(), value: action.payload })
			});

		case actionType.DELETE_RESULT:
			// const id =2;
			// const newArr = [...state.results];
			// newArr.splice(id, 1)

			return deleteResult(state, action);

		default:
			return state;
	}
};

export default reducer;
