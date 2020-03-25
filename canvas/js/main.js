// init (reset)
// - start it at 0
// render
// - display win vs lose
// handleSpin (event listener)
// - onclick takes number and caches it
// - invoke findWinningNumber
// - invoke spinTheWheel (function )
// - collects the number from the spin
// - calls render (function declaration)
// findWinningNumber
// - generate winning number
// spinTheWheel
// - animate the wheel
// - stop at winning number
// checkResult
// - check for win

// $(document).ready(function(){

//     // constants

    const colors = ["#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990", "#fffff0", "#bb9990"];
    const restaraunts = [11, 2, 7, 20, 9, 14, 1, 24, 15, 6, 19, 10, 3, 22, 17, 8, 13, 4, 21, 16, 23, 12, 5, 18];

//     // variables

//     let startAngle = 0;
//     let arc = Math.PI / 6;
//     let ctx;

//     // cached variables

//     // event listeners

//     $('#submit').click(function(event){
//         let $playerNumber = $('#input').val();
//         console.log($playerNumber);
//     });

    // functions


let startAngle = 0;
let arc = Math.PI / 12;


let spinTimeout = null;
let spinArcStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;

let ctx;
   
function drawWheel() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let outsideRadius = 250;
    let textRadius = 200;
    let insideRadius = 0;
   
    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);
    ctx.strokeStyle = "#f6be90";
    ctx.font = '22px "Orator Std", Arial';
   
    for(let i = 0; i < 24; i++) {
      let angle = startAngle + i * arc;
      ctx.fillStyle = colors[i];
     
      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
     
      ctx.save();
      ctx.fillStyle = "#add8e6";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      let text = restaraunts[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }
  }
}

draweWheel();














// function spin() {
//   spinAngleStart = Math.random() * 10 + 10;
//   spinTime = 0;
//   spinTimeTotal = Math.random() * 3 + 4 * 1000;
//   rotateWheel();
// }

// function rotateWheel() {
//   spinTime += 30;
//   if(spinTime >= spinTimeTotal) {
//     stopRotateWheel();
//     return;
//   }
//   var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
//   startAngle += (spinAngle * Math.PI / 180);
//   drawRouletteWheel();
//   spinTimeout = setTimeout('rotateWheel()', 30);
// }

// function stopRotateWheel() {
//   clearTimeout(spinTimeout);
//   var degrees = startAngle * 180 / Math.PI + 90;
//   var arcd = arc * 180 / Math.PI;
//   var index = Math.floor((360 - degrees % 360) / arcd);
//   ctx.save();
//   ctx.font = 'bold 30px Helvetica, Arial';
//   var text = restaraunts[index]
//   ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
//   ctx.restore();
// }

// function easeOut(t, b, c, d) {
//   var ts = (t/=d)*t;
//   var tc = ts*t;
//   return b+c*(tc + -3*ts + 3*t);
// }