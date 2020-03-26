
const numbers = [11, 2, 7, 20, 9, 14, 1, 24, 
    15, 6, 19, 10, 3, 22, 17, 8, 
    13, 4, 21, 16, 23, 12, 5, 18];


let startAngle = 0;
let arc = Math.PI / 12;
let ctx;
let outerRadius = 250;
let numRadius = 200;
let innerRadius = 0;

let winningNumber;
let winningSegment;

let wheel = document.getElementById("wheel");
let canvas = document.getElementById("canvas");
let playerNumber = document.querySelector("input");
let message = document.getElementById("message");


document.getElementById("submit").onclick = handleSpin;
document.getElementById("reset").onclick = init;


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
winningNumber = null;
winningSegment = null;
wheel.style.animation = "wheelSpin 30s linear infinite";
}

function render(){
if (playerNumber === winningNumber) {
message.innerHTML = "you won!" + playerNumber.value + "is the winner!";
} else message.innerHTML = playerNumber.value + " didn't win this time...";
}

function handleSpin(){
message.innerHTML = "all bets are on number " + playerNumber.value + "!";
winningNumber = Math.floor(Math.random() * ((24-1)+1))+1;
console.log(winningNumber);
winningSegment = numbers.indexOf(winningNumber) + 1;
console.log(winningSegment);
let landingSpot = (winningSegment * 15) + 1080;
console.log(landingSpot);
console.log(wheel);
wheel.style.animation = "wheelSpin 5s linear";
}``

