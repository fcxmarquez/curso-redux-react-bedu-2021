import { combineReducers } from "redux"; /* Combinara los reducers que le pasemos como parametro */
import usersReducer from "./usersReducer";
import publicationsReducer from "./publicationsReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  usersReducer,
  publicationsReducer,
  tasksReducer,
});
