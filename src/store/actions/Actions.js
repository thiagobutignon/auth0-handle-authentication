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

export const loginSuccess = () => {
  return {
    type: ActionTypes.LOGIN_SUCCESS
  };
};

export const loginFailure = () => {
  return {
    type: ActionTypes.LOGIN_FAILURE
  };
};

export const addProfile = profile => {
  return {
    type: ActionTypes.ADD_PROFILE
  };
};

export const removeProfile = () => {
  return {
    type: ActionTypes.REMOVE_PROFILE
  };
};

export const userInputChange = text => {
  return {
    type: ActionTypes.USER_INPUT_CHANGE
  };
};

export const userInputSubmit = () => {
  return {
    type: ActionTypes.USER_INPUT_SUBMIT
  };
};
