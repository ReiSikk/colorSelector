"use strict";

///////TODO:
//1. rgb to hsl conversion function
//2. rgb to hex conversion function
// 3. display rgb values function
// 4. display hex values function
// 5. display hsl values function
// 6. display color as the background div color function

let r, g, b, h, s, l;

let colorPickerValue = document.querySelector("#color").value;
console.log(colorPickerValue);
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

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
}

///////Function display color as div background//////////////
let colorpicker = document.querySelector("#color");

// setInterval method repeatedly calls a function witha fixed time delay between each call - in this case 0.1ms so it feels instant
setInterval(() => {
  let color = colorpicker.value;
  document.querySelector("body").style.backgroundColor = color;
}, 0.1);

///fucntion rgb to hex

/// function display HEX

/// function display rgb

/// function display hsl
