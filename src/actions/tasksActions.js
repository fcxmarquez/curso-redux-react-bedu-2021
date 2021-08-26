import axios from "axios";
import { getTasks, loading, error } from "./types/tasksTypes";

export const getAll = () => async (dispatch) => {
  /* Una funcion que retorna otra funcion */
  dispatch({
    type: loading,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({
      type: getTasks,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: "Tasks information don't available",
    });
  }
};
