const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const axisName = "Minutes to eat breakfast";
const division = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const answerDots = [6, 2, 3, 5, 2, 5, 0, 0, 2, 10, 7, 4, 1];
const width = 540;
const height = 300;
const green = "#4BB543";
const gray = " #dddddd";
canvas.width = width;
canvas.height = height;

context.font = "16px Arial";
context.fillText(axisName, 100, 290);

context.moveTo(20, 240);
context.lineTo(500, 240);
context.stroke();
let count = 0;
for (let i = 20; i < width - 20; i += 40) {
  context.moveTo(i, 220);
  context.lineTo(i, 260);
  context.stroke();
  context.fillText(division[count++], i, 275);
}
withOutInteraction()

function changeMode(obj) {
  let version = obj.value;

  if (version === "1") {
      withOutInteraction()
  }
  if (version === "2") {
    withInteraction()
  }
}
function withOutInteraction() {
    context.clearRect(0,0,width,205)
  let x = 20;
  answerDots.forEach((value) => {
    let y = 200;
    console.log(value);
    for (let i = 1; i <= value; i++) {
      context.beginPath();
      const circle  =  new Path2D()
      circle.arc(x, y, 7, 0, 2 * Math.PI, false);
      context.fillStyle = green;
      context.fill(circle);
      y = y - 20;
    }
    x = x + 40;
  });
}

function withInteraction() {
  for (let i = 20; i < width - 20; i += 40) {
    let y = 200;

    for (let j = 0; j < 10; j++) {
      context.beginPath();
      const circle = new Path2D()
      circle.arc(i, y, 7, 0, 2 * Math.PI, false);
      context.fillStyle = gray;
      context.fill(circle);
      y = y - 20;
    
      canvas.addEventListener('click',(event)=>{
          if(context.isPointInPath(circle,event.offsetX,event.offsetY)){
              let y1 = 200
            for (let k = 0; k < 10; k++) {
            
                context.beginPath();
                const circle = new Path2D()
                circle.arc(i, y1, 7, 0, 2 * Math.PI, false);
                if(y1> event.offsetY){
                    context.fillStyle = green;
                }else{
                    context.fillStyle = "#FFF";
                }
                
                context.fill(circle);
                y1 = y1 - 20;
            }
            // alert("work")
          }
      })
    }
  }

}
