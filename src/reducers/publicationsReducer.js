import {
  getForUser,
  loading,
  error,
} from "../actions/types/publicationsTypes";

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  /* Aqui de una vez le asignamos nuestro initial state */
  switch (action.type) {
    case getForUser:
      return { ...state, publications: action.payload, loading: false, error: "" };

    case loading: {
      return { ...state, loading: true };
    }

    case error: {
      return { ...state, error: action.payload, loading: false };
    }

    default:
      return state;
  }
};
