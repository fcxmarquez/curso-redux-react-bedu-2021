import axios from "axios";
import {
  getTasks,
  loading,
  error,
  setChangeUserId,
  setChangeTitle,
} from "./types/tasksTypes";

export const getAll = () => async (dispatch) => {
  /* Una funcion que retorna otra funcion */
  dispatch({
    type: loading,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const tasks = {};
    response.data.map(
      (item) =>
        (tasks[item.userId] = {
          ...tasks[item.userId],
          [item.id]: { ...item },
        })
    ); /* Con esto normalizamos los datos, mapeamos de un arreglo a un objeto de objetos, de paso ya hicimos la inmutablididad */

    dispatch({
      type: getTasks,
      payload: tasks,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: "Tasks information don't available",
    });
  }
};

export const changeUserId = (payload) => (dispatch) => {
  dispatch({
    type: setChangeUserId,
    payload: payload,
  });
};

export const changeUserTitle = (payload) => (dispatch) => {
  dispatch({
    type: setChangeTitle,
    payload: payload,
  });
};
