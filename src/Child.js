import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";


function Child({ onChangeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    export default Child;