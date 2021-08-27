import {
  getTasks,
  loading,
  error,
  setChangeUserId,
  setChangeTitle,
  added,
} from "../actions/types/tasksTypes";

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: "",
  userId: "",
  title: "",
  return: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  /* Aqui de una vez le asignamos nuestro initial state */
  switch (action.type) {
    case getTasks:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: "",
        return: false,
      };

    case loading: {
      return { ...state, loading: true };
    }

    case error: {
      return { ...state, error: action.payload, loading: false };
    }

    case setChangeUserId: {
      return { ...state, userId: action.payload };
    }

    case setChangeTitle: {
      return { ...state, title: action.payload };
    }

    case added: {
      return {
        ...state,
        tasks: {},
        loading: false,
        error: "",
        return: true,
        userId: "",
        title: "",
      };
    }

    default:
      return state;
  }
};
