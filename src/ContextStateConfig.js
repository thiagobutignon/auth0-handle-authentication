import React, { useReducer } from "react";
import Context from "./utils/Context";
import * as Actions from "./store/actions/Actions";

import * as Reducer1 from "./store/reducers/PlainReducer";
import * as AuthReducer from "./store/reducers/AuthReducer";
import * as FormReducer from "./store/reducers/FormReducer";
import Routes from "./routes";
import Auth from "./utils/Auth";

const ContextState = () => {
  /* 
  Plain Reducer
  */
  const [stateReducer1, dispatchReducer1] = useReducer(
    Reducer1.Reducer1,
    Reducer1.initialState
  );

  const handleDispatchTrue = () => {
    dispatchReducer1(Actions.success());
  };

  const handleDispatchFalse = () => {
    dispatchReducer1(Actions.failure);
  };

  /*
  Auth Reducer
  */
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );

  const handleLogin = () => {
    dispatchAuthReducer(Actions.loginSuccess);
  };

  const handleLogout = () => {
    dispatchAuthReducer(Actions.loginFailure);
  };

  const handleAddProfile = profile => {
    dispatchAuthReducer(Actions.addProfile(profile));
  };

  const handleRemoveProfile = () => {
    dispatchAuthReducer(Actions.removeProfile());
  };

  /*
  Form Reducer
  */
  const [stateFormReducer, dispatchFormReducer] = useReducer(
    FormReducer.FormReducer,
    FormReducer.initialState
  );

  const handleFormChange = event => {
    dispatchFormReducer(Actions.userInputChange(event.target.value));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    event.persist();
    dispatchFormReducer(Actions.userInputSubmit(event.target.useContext.value));
  };
};

export default ContextState;
