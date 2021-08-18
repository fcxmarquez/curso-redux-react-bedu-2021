const INITIAL_STATE = {
  users: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  /* Aqui de una vez le asignamos nuestro initial state */
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
