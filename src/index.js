import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./screen/Product/Product";
import List from "./screen/List/List";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <Route exact path="/">
        <List />
      </Route>
      <Route exact path="/product/:id">
        <Product />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
