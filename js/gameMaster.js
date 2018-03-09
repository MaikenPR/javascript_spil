// /* STEP 1
// der skabes forbindelse til canvas elementet i html filen.*/

var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d"); 

// //Der skabes et kvadrat
// ctx.beginPath(); 
// ctx.rect(20, 40, 50, 50); 
// ctx.fillStyle = "#FF0000"; 
// ctx.fill(); 
// ctx.closePath();

// //Der skabes en cirkel
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// //Der skabes en rektangel
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();
//======================================================================


/* STEP 2 - Make it Move!*/

/*Vi laver en bold og får den til at bevæge sig. Se steps her: 
https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball */

// var x = canvas.width/2;
// var y = canvas.height-30;

// var dx = 2;
// var dy = -2;

// function drawBall(){
//     ctx.beginPath();
//     ctx.arc(x, y, 10, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     x += dx;
//     y += dy;
// }
// setInterval(draw, 10);
//======================================================================


/* STEP 3 - Make it Bounce!

Jeg har kopieret det ovenfor, for at kunne se hvad der bliver ændret 
og skriver så små kommentarer ud for de linjer der blievr opdateret 
her i forhold til de ovenfor i step 2.*/

// var x = canvas.width/2;
// var y = canvas.height-30;

// var dx = 2;
// var dy = -2;

// var ballRadius = 10; //Ny tilføjelse

// function drawBall(){
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI*2); //opdateret med ballRadius
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     x += dx;
//     y += dy;

//     //Bounce off of Top og bund = Ny tilføjelse
//     if(x + dx > canvas.width-ballRadius || x +dx < ballRadius){
//        dx = -dx
//     }

//     //Bounce off of left and right = Ny tilføjelse
//     if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
//         dy = -dy
//     }
// }
// setInterval(draw, 10);
//======================================================================


/* STEP 4 - Make a paddle & keyboard controls!

Jeg har kopieret det ovenfor, for at kunne se hvad der bliver ændret 
og skriver så små kommentarer ud for de linjer der blievr opdateret 
her i forhold til de ovenfor i step 3.*/

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

//Paddle-variablerne her under er nyt tilføjet
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//Vi laver en paddle - nyt tilføjet
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;

    //Bounce off of Top og bund
    if(x + dx > canvas.width-ballRadius || x +dx < ballRadius){
       dx = -dx
    }

    //Bounce off of left and right
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
        dy = -dy
    }
}
setInterval(draw, 10);

//==============================================================
// NÅET TIL STEP 4 "Allowing the user to control the paddle"!!!!
//==============================================================