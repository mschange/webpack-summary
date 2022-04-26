// import { Add } from "./until";
// import "./index.css"
// import "./index.less"
// const test = () => {
//     let a = 1,
//         b = 3;
//     console.log("es6转换为es5");
//     return a + b;
// }

// console.log(test());

// console.log(Add(5, 6), "==============>>>>")
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import logo from "./assect/ceshi.jpeg"

import "./index.less";

const App = () => {
    return (
        <>
            <div>hello React--监听====</div>
            <br />
            <img src={logo} style={{ width: 400 }} />
            <div className="bg_imgage"></div>
        </>
    )
}

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);