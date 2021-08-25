import { update, loading, error, commentLoading, commentError } from "../actions/types/publicationsTypes";

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: "",
  commentLoading: false,
  commentError: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  /* Aqui de una vez le asignamos nuestro initial state */
  switch (action.type) {
    case update:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: "",
      };

    case loading: {
      return { ...state, loading: true };
    }

    case error: {
      return { ...state, error: action.payload, loading: false };
    }

    case commentLoading: {
      return { ...state, commentLoading: true };
    }

    case commentError: {
      return { ...state, commentError: action.payload, commentLoading: false };
    }

    default:
      return state;
  }
};
