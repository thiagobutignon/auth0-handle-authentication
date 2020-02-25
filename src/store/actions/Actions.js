import * as ActionTypes from "./ActionTypes";

export const SUCCESS = {
  type: ActionTypes.SUCCESS
};

export const FAILURE = {
  type: ActionTypes.FAILURE
};

export const success = () => {
  return {
    type: ActionTypes.SUCCESS
  };
};

export const failure = () => {
  return {
    type: ActionTypes.FAILURE
  };
};

export const login_success = () => {
  return {
    type: ActionTypes.LOGIN_SUCCESS
  };
};

export const login_failure = () => {
  return {
    type: ActionTypes.LOGIN_FAILURE
  };
};

export const add_profile = profile => {
  return {
    type: ActionTypes.ADD_PROFILE
  };
};

export const remove_profile = () => {
  return {
    type: ActionTypes.REMOVE_PROFILE
  };
};

export const user_input_change = text => {
  return {
    type: ActionTypes.USER_INPUT_CHANGE
  };
};

export const user_input_submit = () => {
  return {
    type: ActionTypes.USER_INPUT_SUBMIT
  };
};
