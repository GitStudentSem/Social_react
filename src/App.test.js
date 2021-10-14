import React from "react";
import MainApp from "./App";
import ReactDOM from "react-dom";

test("renders without craching", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
