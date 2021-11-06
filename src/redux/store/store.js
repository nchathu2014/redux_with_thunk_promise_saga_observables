import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../reducers/rootReducer";
import { validationMiddlware } from "./../middlewares/validationMiddlware";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, validationMiddlware)
);
