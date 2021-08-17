export const getAll = () => (dispatch) => { /* Una funcion que retorna otra funcion */
  dispatch({
    type: "GET_USERS",
    payload: [1,3,5]
  })
}