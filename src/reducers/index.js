import { combineReducers } from "redux";
import counter from "./counter";
import ui from "./ui";

//리듀서 합치기
const reducers = combineReducers({
  counter, ui
})

export default reducers;