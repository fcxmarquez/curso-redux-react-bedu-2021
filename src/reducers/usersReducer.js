import { getUsers, loading, error } from "../actions/types/usersTypes";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: ""
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  /* Aqui de una vez le asignamos nuestro initial state */
  switch (action.type) {
    case getUsers:
      return { ...state, users: action.payload, loading: false };

    case loading: {
      return { ...state, loading: true };
    }

    case error: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};
