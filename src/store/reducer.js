import * as actionType from './action';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case actionType.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };

    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };

    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actionType.DELETE_RESULT:
      // const id =2;
      // const newArr = [...state.results];
      // newArr.splice(id, 1)
      const updatedArr = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArr
      };
    default:
      return state;
  }
};

export default reducer;
