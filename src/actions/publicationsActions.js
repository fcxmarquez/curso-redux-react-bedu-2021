import axios from "axios";
import { error, getForUser, loading } from "./types/publicationsTypes";
import * as usersTypes from "./types/usersTypes";

const { getUsers: usersGetAll } = usersTypes;

export const getUser = (key) => async (dispatch, getState) => {
  /* getState sirve par recibir el estado actual de tu store */
  const { users } = getState().usersReducer;
  const { publications } = getState().publicationsReducer;
  const userId = users[key].id;

  dispatch({
    type: loading,
  });

  try {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    const actualPublications = [...publications, response.data];

    dispatch({
      type: getForUser,
      payload: actualPublications,
    });

    /* Realizaremos la inmutabilidad */
    const keysPublications = actualPublications.length - 1;
    const actualUsers = [...users];
    actualUsers[key] = {
      ...users[key],
      keysPublications,
    };

    dispatch({
      type: usersGetAll,
      payload: actualUsers,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: "Publications don't available",
    });
  }
};
