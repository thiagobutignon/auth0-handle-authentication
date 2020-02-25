import * as ActionTypes from "../actions/ActionTypes";

export const initialState = {
  stateProp1: false,
  stateProp2: false
};

export const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SUCCESS:
      return {
        ...state,
        stateProp1: true,
        stateProp2: true
      };

    case ActionTypes.FAILURE:
      return {
        ...state,
        stateProp1: false,
        stateProp2: false
      };

    default:
      throw new Error();
  }
};
