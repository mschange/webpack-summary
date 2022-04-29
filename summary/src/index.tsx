// import React, { Component } from "react";
import * as ReactDOMClient from "react-dom/client";
import * as logo from "./assect/ceshi.jpeg";
import "./index.less"
const Index = (): React.ReactElement => {
    console.log(logo, "tup")
    return <>
        <div className="test">首页11111=-===========起飞楼</div>
        <div className="bg_imgage"></div>
        <div>图片</div>
        <img src={ logo } alt="" style={{width: 300}}/>
    </>
}
// class Index extends Component {
//     render() {
//         return <div>的点点滴滴多</div>
//     }
// }
const container = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(container);
root.render(<Index />);