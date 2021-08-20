import axios from "axios";
import { error, getPublications, loading } from "./types/publicationsTypes";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: loading,
  });
  try {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: getPublications,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: error,
    });
  }
};
