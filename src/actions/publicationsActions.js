import axios from "axios";
import { error, update, loading } from "./types/publicationsTypes";
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

    const news = response.data.map((publication) => ({
      ...publication,
      comments: [],
      open: false,
    }));

    const actualPublications = [...publications, news];

    dispatch({
      type: update,
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

export const openClose =
  (keyPublication, commentKey) => (dispatch, getState) => {
    const { publications } = getState().publicationsReducer;
    console.log(keyPublication, commentKey);
    const selected = publications[keyPublication][commentKey];

    const actualized = {
      ...selected,
      open: !selected.open,
    };

    /* Realizaremos la inmutabilidad */
    const actualizedPublications = [...publications];
    actualizedPublications[keyPublication] = [
      ...publications[keyPublication],
    ]; /* Esta linea al parecer esta de mas */
    actualizedPublications[keyPublication][commentKey] = actualized;

    dispatch({
      type: update,
      payload: actualizedPublications,
    });
  };

export const getComments =
  (keyPublication, commentKey) => (dispatch, getState) => {};
