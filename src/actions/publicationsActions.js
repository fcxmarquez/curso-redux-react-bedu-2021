import axios from "axios";
import { error, getForUser, loading } from "./types/publicationsTypes";

export const getUser = (key) => async (dispatch, getState) => {
  /* getState sirve par recibir el estado actual de tu store */
  const { users } = getState().usersReducer;
  const { publications } = getState().publicationsReducer;
  const userId = users[key].id;

  const response = await axios.get(
    `http://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const actualPublications = [...publications, response.data];

  dispatch({
    type: getForUser,
    payload: actualPublications,
  });
};
