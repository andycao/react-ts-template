import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as swRegister from "./swRegister";
import "./style/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// Learn more about service workers: https://bit.ly/CRA-PWA
swRegister.register();
