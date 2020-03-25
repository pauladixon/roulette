
// constants

const numbers = [11, 2, 7, 20, 9, 14, 1, 24, 
                15, 6, 19, 10, 3, 22, 17, 8, 
                13, 4, 21, 16, 23, 12, 5, 18];

// variables

let startAngle = 0;
let arc = Math.PI / 12;
let ctx;
let outerRadius = 250;
let numRadius = 200;
let innerRadius = 0;

let spinNumber;

// cached variables

let canvas = document.getElementById("canvas");
let playerNumber = document.querySelector("input");
let message = document.getElementById("message");

// // event listeners

document.getElementById("submit").onclick = render;
document.getElementById("reset").onclick = init;

// functions

function drawWheel() {
    ctx = canvas.getContext("2d");
    ctx.font = '22px "Orator Std", Arial';

    for(let i = 0; i < 24; i++) {
        let angle = startAngle + (i * arc);
        if (i%2 === 0){
            ctx.fillStyle = "#fffff0";
        } else ctx.fillStyle = "#bb9990";
    
        ctx.beginPath();
        ctx.arc(250, 250, outerRadius, angle, angle + arc, false);
        ctx.arc(250, 250, innerRadius, angle + arc, angle, true);
        ctx.fill();
        ctx.save();
        ctx.fillStyle = "#dae0e8";
        ctx.translate(250 + Math.cos(angle + arc / 2) * numRadius,
                        250 + Math.sin(angle + arc / 2) * numRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        
        let number = numbers[i];
        ctx.fillText(number, -ctx.measureText(number).width / 2, 0);
        ctx.restore();
    }
}

drawWheel();

function init() {
    playerNumber = null;
    message.innerHTML = null;
    spinNumber = null;
}

function render(){
    message.innerHTML = "all bets are on number " + playerNumber.value + "!";
    if (playerNumber === spinNumber) {
        message.innerHTML = "you won!" + playerNumber.value + "is the winner!";
    } else message.innerHTML = playerNumber.value + " didn't win this time...";

}




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




// let spinTimeout = null;
// let spinArcStart = 10;
// let spinTime = 0;
// let spinTimeTotal = 0;

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
// 