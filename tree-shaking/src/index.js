import { Index, Tree } from "./test";

const Add = (x, y) => {
    return x + y;
}

const Test = () => {
    console.log("=========================>>>>会不会被打包")
}

console.log(Add(8, 2), "=====>>>>")
Tree()