import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import publicDataReducer from "./publicDataSlice"; // ⬅️ kamu harus punya file ini

const rootReducer = combineReducers({
  tasks: tasksReducer,
  publicData: publicDataReducer,
});

export default rootReducer;
