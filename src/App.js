import React, { useState } from "react";
import "./styles.css";
// import { render } from "react-dom";

const Circle = () => {
  return (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50%" cy="50%" r="20" fill="red" />
    </svg>
  );
};

const Square = () => {
  return (
    <svg>
      <rect x="0" y="0" width="100%" height="100%" />
    </svg>
  );
};

const DynamicFigure = props => {
  const figures = {
    circle: Circle,
    square: Square
  };
  const Figure = figures[props.typeFigure];

  return (
    <div>
      <Figure />
    </div>
  );
};

export default function App() {
  const [currentFigure, setCurrentFigure] = useState("circle");
  const [valueButton, setValueButton] = useState("square");

  const changeFigure = () => {
    let newFigure = currentFigure === "circle" ? "square" : "circle";
    let newvalue = valueButton === "circle" ? "square" : "circle";
    setCurrentFigure(newFigure);
    setValueButton(newvalue);
  };

  return (
    <div>
      <button onClick={changeFigure}>{valueButton}</button>
      <DynamicFigure typeFigure={currentFigure} />
    </div>
  );
}
