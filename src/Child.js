import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";


function Child({ onChangeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  console.log(handleClick)
  return <div className = "child"
  onClick={onChangeColor}
  style = {
    { backgroundColor: color}
}
/>;
}

    export default Child;