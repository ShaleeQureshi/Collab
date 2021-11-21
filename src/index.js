import React from "react";
import ReactDOM from "react-dom";
import App from "./scripts/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import "./scripts/firebase/init";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
