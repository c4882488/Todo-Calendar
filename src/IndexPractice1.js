import React from "react";
import ReactDOM from "react-dom";

const element = <div> Hello World，現在是{new Date().toString()}</div>;

ReactDOM.render(element, document.getElementById("root"));
