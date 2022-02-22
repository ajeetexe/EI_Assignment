// variable declaration
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let axisName = "Minutes to eat breakfast";
let division = "0|1|2|3|4|5|6|7|8|9|10|11|12";
let answerDots = "6|2|3|5|2|5|0|0|2|10|7|4|1";
const width = 800;
const height = 600;
const green = "#4BB543";
const gray = " #dddddd";
canvas.width = width;
canvas.height = height;
let gap = width / division.split("|").length;

// this is change event method for select option
function changeMode(obj) {
  let version = obj.value;

  if (version === "1") {
    withOutInteraction();
  }
  if (version === "2") {
    withInteraction();
  }
}

// this method return output for without Interaction
function withOutInteraction() {
  document.getElementById("chart-name").innerHTML =
    "Dot Chart Without Interactive";
  context.clearRect(0, 0, width, 480);
  let x = gap / 2;
  answerDots.split("|").forEach((value) => {
    let y = 460;
    for (let i = 1; i <= value; i++) {
      context.beginPath();
      const circle = new Path2D();
      circle.arc(x, y, 7, 0, 2 * Math.PI, false);
      context.fillStyle = green;
      context.fill(circle);
      y = y - 20;
    }
    x = x + gap;
  });
}

// this method return output for with Interaction
function withInteraction() {
  document.getElementById("chart-name").innerHTML = "Dot Chart Interactive";
  for (let i = gap / 2; i < width; i += gap) {
    let y = 460;

    for (let j = 0; j < 20; j++) {
      context.beginPath();
      const circle = new Path2D();
      circle.arc(i, y, 7, 0, 2 * Math.PI, false);
      context.fillStyle = gray;
      context.fill(circle);
      y = y - 20;

      // here this is event listner for circle click
      canvas.addEventListener("click", (e) => {
        if (context.isPointInPath(circle, e.offsetX, e.offsetY)) {
          let y1 = 460;
          for (let k = 0; k < 20; k++) {
            context.beginPath();
            const circle = new Path2D();
            circle.arc(i, y1, 7, 0, 2 * Math.PI, false);
            if (y1 > e.offsetY) {
              context.fillStyle = green;
            } else {
              context.fillStyle = "#FFF";
            }
            context.fill(circle);
            y1 = y1 - 20;
          }
        }
      });
    }
  }
}

// this method lauch on onload and also when click submit button
function getText() {
  let a = document.getElementById("axis-name").value;
  let b = document.getElementById("answer-dots").value;
  let c = document.getElementById("division").value;

  if (a !== "") {
    axisName = a;
  }
  if (b.split("|").length != c.split("|").length) {
    alert("Length of answer dots and division must be equal");
  } else {
    if (b !== "" && checkInteger(b.split("|"))) {
      answerDots = b;
    }
    if (c !== "" && checkInteger(c.split("|"))) {
      division = c;
    }
  }

  gap = width / division.split("|").length;
  context.clearRect(0, 480, width, height);
  context.font = "16px Arial";
  context.fillStyle = "black";
  context.lineWidth = 3;
  context.textAlign = "center";
  context.fillText(axisName, 400, 580);
  context.fill();
  context.moveTo(gap / 2, 500);
  context.lineTo(width - gap / 2, 500);
  context.stroke();
  let count = 0;

  for (let i = gap / 2; i < width; i += gap) {
    context.moveTo(i, 480);
    context.lineTo(i, 520);
    context.stroke();
    context.fillText(division.split("|")[count++], i, 540);
  }
  withOutInteraction();
  document.getElementById("mode").value = "1";
}

// this method just return boolean if input is number or string
function checkInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != Number(arr[i])) {
      return false;
    }
  }
  return true;
}
