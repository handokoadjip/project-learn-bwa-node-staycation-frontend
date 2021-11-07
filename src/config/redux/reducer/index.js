import { combineReducers } from "redux";
import checkout from "./checkout";
import general from "./general";
import vacation from "./vacation";
import category from "./category";

export default combineReducers({
  checkout,
  general,
  vacation,
  category,
});
