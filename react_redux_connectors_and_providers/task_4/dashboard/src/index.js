import React from "react";
import ReactDOM from "react-dom";
import { creatStore, Provider, applyMiddleware, compose, combineReducers} from "react-redux";
import thunk from 'redux-thunk'
import App from "./App/App";
import rootReducer, { initialState } from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = creatStore(combineReducers(rootReducer), initialState, composeEnhancers(applyMiddleware(thunk)))

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
