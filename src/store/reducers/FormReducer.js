import * as ActionTypes from "../actions/ActionTypes";

export const initialState = {
  userTextChange: "",
  userTextSubmit: ""
};

export const FormReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.USER_INPUT_CHANGE:
      return {
        ...state,
        userTextChange: action.payload
      };
    case ActionTypes.USER_INPUT_SUBMIT:
      return {
        ...state,
        userTextSubmit: action.payload
      };
    default:
      throw new Error();
  }
};
