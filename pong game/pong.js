const canvas = document.getElementById("pong");
const context = canvas.getContext('2d');

/* context.fillStyle = "black";
context.fillRect(100, 200,50, 75);
/* x, y, w, h*/ 

/* context.fillStyle= "red";
context.beginPath();
context.arc(300, 350, 100, 0, Math.PI*2, false);
/* x, y, radius, başlangıç açısı, bitiş açısı, direction 
context.closePath(); */

function drawRect(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawCircle(){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, MAth.PI*2, false);
    ctx.closePath();
    ctx.fill();
}