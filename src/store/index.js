import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";

const initialState = {
  city: "Santa Cruz de la Palma,es",
};

// para los middleware con el dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
