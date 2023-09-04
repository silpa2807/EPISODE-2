import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello world from react");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am h1 tag of child"),
        React.createElement("h2", {}, "I am h2 tag of child"),
    ])
);

console.log(parent); // this is a reactt object
//this react object becomes html that browser understands
//while this react object is rendering on the dom

root.render(parent);

