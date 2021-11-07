import reducer from "../reducer";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
