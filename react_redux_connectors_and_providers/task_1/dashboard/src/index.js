import React from "react";
import ReactDOM from "react-dom";
import { creatStore, Provider } from "react-redux";
import App from "./App/App";
import { uiReducer } from "./reducers/uiReducer";

const store = creatStore(uiReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
