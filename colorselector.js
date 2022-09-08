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
const cssV = document.querySelector(".css");
const colorpicker = document.querySelector("#colorpicker");
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", init);
let r, g, b, h, s, l, hexColorValue, rgbColorValue, hslColorValue, hexString, color, colorPickValue, cssColorValue;

//set up
function init() {
  hexV.textContent = colorpicker.value;
  rgbV.textContent = "rgb: 255, 255, 255";
  hslV.textContent = "hsl: 0, 0, 100";
  cssV.textContent = "rgb(0, 0, 0,)";
  getValue();
}

//////**************MODAL*****************//////// */
function getValue() {
  let hexColorValue, rgbColorValue;
  colorpicker.addEventListener("input", (e) => {
    let colorPickValue = e.target.value;
    // HEX value
    hexColorValue = `${colorPickValue}`;
    //RGB value
    rgbColorValue = hexToRgb(hexColorValue);
    console.log(rgbColorValue);
    //HSL value
    hslColorValue = rgbToHSL(rgbColorValue.r, rgbColorValue.g, rgbColorValue.b);
    //CSS value
    cssColorValue = rgbToCss(rgbColorValue);
    ///call the display func
    displayColors(hexColorValue, rgbColorValue, hslColorValue, cssColorValue);
  });
}

///***********VIEW**************////////// */
function displayColors(hex, rgb, hsl, css) {
  displayHex(hex);
  displayHsl(hsl);
  displayRgb(rgb);
  displayCss(css);
  //set the body background color
  body.style.backgroundColor = hex;
}
///********************CONTROLLER////************* */
function displayHex(hex) {
  hexV.textContent = hex;
}
function displayRgb(rgb) {
  rgbV.textContent = `rgb: ${rgb.r},${rgb.g},${rgb.b}`;
}
function displayHsl(hsl) {
  hslV.textContent = `hsl: ${hsl.h}, ${hsl.s}, ${hsl.l}`;
}
function displayCss(css) {
  cssV.textContent = `css: rgb(${css.r},${css.g},${css.b})`;
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
  let color = colorpicker.value;
  hexString = color.substring(color.indexOf("#") + 1);
  // makes strings into numbers
  r = parseInt(hexString.substring(1, 3), 16);
  g = parseInt(hexString.substring(3, 5), 16);
  b = parseInt(hexString.substring(5, 7), 16);
  // return {r: r, g: g, b: b}
  return { r, g, b };
}

function rgbToCss(rgb) {
  r = rgb.r;
  g = rgb.g;
  b = rgb.b;
  return { r, g, b };
}
/* function rgbToHex(rgbObject) {
  let r, g, b;
  r = rgbObject.r;
  g = rgbObject.g;
  b = rgbObject.b;
  rgbToHSL(rgbObject.r, rgbObject.g, rgbObject.b);
  return `#${r}${g}${b}`;
} */
