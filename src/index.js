import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import "./assets/styles/icons.css"
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk"

const store = createStore(
  reducers,
  {}, //inital state
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
