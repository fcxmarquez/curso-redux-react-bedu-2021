import axios from "axios"

export const getAll = () => async (dispatch) => { /* Una funcion que retorna otra funcion */
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  dispatch({
    type: "GET_USERS",
    payload: response.data
  })
}