import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { history } from "./helpers/history";

import store from "./store/store";
import "./index.css";
import App from "./app/app";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
