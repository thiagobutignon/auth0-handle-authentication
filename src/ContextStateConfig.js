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
};

export default ContextState;
