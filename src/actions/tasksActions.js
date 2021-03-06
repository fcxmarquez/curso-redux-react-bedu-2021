import axios from "axios";
import {
  getTasks,
  loading,
  error,
  setChangeUserId,
  setChangeTitle,
  saved,
  putTask,
  setCleanForm,
} from "./types/tasksTypes";

export const getStateTasks = () => async (dispatch) => {
  /* Una funcion que retorna otra funcion */
  dispatch({
    type: loading,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const tasks = {};
    response.data.map(
      (item) =>
        (tasks[item.userId] = {
          ...tasks[item.userId],
          [item.id]: { ...item },
        })
    ); /* Con esto normalizamos los datos, mapeamos de un arreglo a un objeto de objetos, de paso ya hicimos la inmutablididad */
    dispatch({
      type: getTasks,
      payload: tasks,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: "Tasks information don't available",
    });
  }
};

export const changeUserId = (payload) => (dispatch) => {
  dispatch({
    type: setChangeUserId,
    payload: payload,
  });
};

export const changeUserTitle = (payload) => (dispatch) => {
  dispatch({
    type: setChangeTitle,
    payload: payload,
  });
};

export const addTask = (newTask) => async (dispatch) => {
  dispatch({
    type: loading,
  });

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    }).then((response) => response.json());

    dispatch({
      type: saved,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: "error",
    });
  }
};

export const editTask = (editTask) => async (dispatch) => {
  dispatch({
    type: loading,
  });

  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${editTask.id}`,
      editTask
    );

    dispatch({
      type: saved,
    });
  } catch (err) {
    dispatch({
      type: error,
      payload: "error",
    });
  }
};

export const changeCheck = (userId, taskId) => (dispatch, getState) => {
  const { tasks } = getState().tasksReducer;
  const selected = tasks[userId][taskId];

  const actualized = {
    ...tasks,
  };
  actualized[userId] = {
    ...tasks[userId],
  };
  actualized[userId][taskId] = {
    ...tasks[userId][taskId],
    completed: !selected.completed,
  };

  dispatch({
    type: putTask,
    payload: actualized,
  });
};

export const remove = (taskId) => async (dispatch) => {
  dispatch({
    type: loading,
  });

  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`
    );
    dispatch({
      type: getTasks,
      payload: {},
    });
  } catch (err) {
    console.log(err);
  }
};

export const cleanForm = () => (dispatch) => {
  dispatch({
    type: setCleanForm
  })
}