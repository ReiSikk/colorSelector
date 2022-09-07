///////TODO:
//1. rgb to hsl conversion function
//2. rgb to hex conversion function
// 3. display rgb values function
// 4. display hex values function
// 5. display hsl values function
// 6. display color as the background div color function

"use strict";

const hexV = document.querySelector(".hex");
const rgbV = document.querySelector(".rgb");
const hslV = document.querySelector(".hsl");
const colorpicker = document.querySelector("#colorpicker");
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", init);
let r, g, b, h, s, l, hexColorValue, rgbColorValue, hslColorValue, hexString, color;

//set up
function init() {
  hexV.textContent = "#ffffff";
  rgbV.textContent = "rgb: 255, 255, 255";
  hslV.textContent = "hsl: 0, 0, 100";
  getValue();
}

//get hex color value and show it
function getValue() {
  let hexColorValue = "#ffffff";
  let rgbColorValue = "rgb: 255, 255, 255";
  colorpicker.addEventListener("input", (e) => {
    let colorPickValue = e.target.value;
    // HEX value
    hexColorValue = `${colorPickValue}`;
    //RGB value
    rgbColorValue = hexToRgb(hexColorValue);
    console.log(rgbColorValue);
    //HSL value
    hslColorValue = rgbToHSL(rgbColorValue.r, rgbColorValue.g, rgbColorValue.b);
    // display values
    hexV.textContent = hexColorValue;

    rgbV.textContent = `rgb: ${rgbColorValue.r}, ${rgbColorValue.g},${rgbColorValue.b}`;

    hslV.textContent = `hsl: ${hslColorValue.h}, ${hslColorValue.s}, ${hslColorValue.l}`;
    //set bpdy background color
    body.style.backgroundColor = hexColorValue;
  });
}

// coverting RGB to HSL values

rgbToHSL();
function rgbToHSL() {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  /* console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing */
  return { h: Math.floor(h), s: Math.floor(s), l: Math.floor(l) };
}

///fucntion hex to rgb
function hexToRgb() {
  console.log("hexToRgb called");
  let color = colorpicker.value;
  hexString = color.substring(color.indexOf("#") + 1);
  // makes strings into numbers
  r = parseInt(hexString.substring(1, 3), 16);
  g = parseInt(hexString.substring(3, 5), 16);
  b = parseInt(hexString.substring(5, 7), 16);
  // return {r: r, g: g, b: b}
  return { r, g, b };
}
//store the returned object into a variable
/* const rgbValueObject = hexToRgb(); */
/* console.log(rgbValueObject); */
