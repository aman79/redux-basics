import * as actionType from '../actions/actionTypes';
import { updatedObject } from '../../store/utility';

const initialState = {
	counter: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.INCREMENT:
			return updatedObject(state, { counter: state.counter + 1 });

		case actionType.DECREMENT:
			return updatedObject(state, { counter: state.counter - 1 });

		case actionType.ADD:
			return updatedObject(state, { counter: state.counter + action.payload });

		case actionType.SUBTRACT:
			return updatedObject(state, { counter: state.counter - action.payload });
		default:
			return state;
	}
};

export default reducer;
