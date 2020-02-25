import * as ActionTypes from "../actions/ActionTypes";

export const initialState = {
  isAuthenticated: false,
  profile: null
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        is_authenticated: true
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        is_authenticated: false
      };
    case ActionTypes.ADD_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    case ActionTypes.REMOVE_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
};
