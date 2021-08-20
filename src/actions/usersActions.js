import axios from "axios";
import { getUsers, loading, error } from "./types/usersTypes";

export const getAll = () => async (dispatch) => {
  /* Una funcion que retorna otra funcion */
  dispatch({
    type: loading,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: getUsers,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: err.message
    })
  }
};
