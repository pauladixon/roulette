
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
let landingSpot;

let wheel = document.getElementById("wheel");
let canvas = document.getElementById("canvas");
let playerNumber = document.querySelector("input");
let message = document.getElementById("message");

document.getElementById("submit").onclick = handleSpin;
document.getElementById("reset").onclick = reset;


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
    wheel.style.animation = "wheelSpin 30s linear infinite";
}

function init() {
    drawWheel();
    findLandingSpot();
}

function findLandingSpot() {
    winningNumber = Math.floor(Math.random() * ((24-1)+1))+1;
    winningSegment = numbers.indexOf(winningNumber) + 1;
    landingSpot = (winningSegment * -15) + 997;
}

function handleSpin(){
    message.innerHTML = "all bets are on number " + playerNumber.value + "!";
    wheel.style.animation = "wheelSpin 6s linear";
    stopWheel();
}

function stopWheel(){
    landOnSpot = setTimeout(function(){
        wheel.style.transform = 'rotate('+landingSpot+'deg)'; 
    }, 1000);
    display = setTimeout(function(){
        render();
    }, 4000);
}

function render(){
    if (playerNumber.value == winningNumber) {
        message.innerHTML = "you won! " + playerNumber.value + " is the winner!";
    } else message.innerHTML = "..." + playerNumber.value + " didn't win this time";
}

function reset(){
    location.reload();
}

init();