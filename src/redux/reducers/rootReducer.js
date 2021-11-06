import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { bitcoinReducer } from "./bitcoinReducer";

export default combineReducers({
  counter: counterReducer,
  bitcoin: bitcoinReducer,
});
