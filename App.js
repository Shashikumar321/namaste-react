import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const jsxHeading = (
  <h1 id="heading" className="heading">
    This is using jsx :){" "}
  </h1>
);

const HiComp = () => (
  <div>
    <h3>Hi </h3>
  </div>
);

const FuncComp = () => (
  <div id="container">
    {jsxHeading}
    <HiComp />
    <h2 id="funcComp">This is a functional component</h2>
  </div>
);

root.render(<FuncComp />);
