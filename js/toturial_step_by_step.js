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

// var x = canvas.width/2;
// var y = canvas.height-30;

// var dx = 2;
// var dy = -2;

// var ballRadius = 10;

// //Paddle-variablerne her under er nyt tilføjet
// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width-paddleWidth)/2;

// //Keyboard-variabler er nyt tilføjet
// var rightPressed = false;
// var leftPressed = false;

// //Eventlistenerne samt de to keyup og keydown funktioner er nyt tilføjet.
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// function keyDownHandler (e){
//     if(e.keyCode == 39){ //39 er koden for den højre piltast
//         rightPressed = true;
//     }
//     else if(e.keyCode == 37){ //37 er koden for den venstre piltast
//         leftPressed = true;
//     }
// }

// function keyUpHandler (e){
//     if(e.keyCode == 39){
//         rightPressed = false;
//     }
//     else if(e.keyCode == 37){
//         leftPressed = false;
//     }
// }

// function drawBall(){
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// //Vi laver en paddle - nyt tilføjet
// function drawPaddle(){
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// }

// function draw(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     drawPaddle();

//     //Bounce off of Top og bund
//     if(x + dx > canvas.width-ballRadius || x +dx < ballRadius){
//         dx = -dx
//     }

//     //Bounce off of left and right
//     if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
//         dy = -dy
//     }

//     //Den betingede sætning herunder er nyt tilføjet.
//     if(rightPressed && paddleX < canvas.width-paddleWidth){
//         paddleX += 7;
//     }
//     else if (leftPressed && paddleX > 0){
//         paddleX -= 7;
//     }

//     x += dx;
//     y += dy;
// }

// setInterval(draw, 10);
// //======================================================================


// /* STEP 5 - Game over

// Jeg har kopieret det ovenfor, for at kunne se hvad der bliver ændret 
// og skriver så små kommentarer ud for de linjer der blievr opdateret 
// her i forhold til de ovenfor i step 4.*/

// var ballRadius = 10;
// var x = canvas.width / 2;
// var y = canvas.height - 30;
// var dx = 2;
// var dy = -2;
// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width - paddleWidth) / 2;
// var rightPressed = false;
// var leftPressed = false;

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// function keyDownHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = true;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = true;
//     }
// };

// function keyUpHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = false;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = false;
//     }
// };

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBall();
//     drawPaddle();

//     //Bounce off of Top og bund
//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//         dx = -dx
//     }

//     /*Den nye if-else-if sætning her under erstatter den if-sætning der 
//     fik balden til at bounce på siderne og nu når den rammer bunden popper 
//     en alert op med "GAME OVER"-beskeden, mens bolden hopper videre, hvis 
//     den rammer vores paddel - NYT TILFØJET*/
//     if (y + dy < ballRadius) {
//         dy = -dy;
//     }
//     else if (y + dy > canvas.height - ballRadius) {
//         if (x > paddleX && x < paddleX + paddleWidth) {
//             dy = -dy;
//         }
//         else {
//             alert("GAME OVER");
//             document.location.reload();
//         }
//     }

//     if (rightPressed && paddleX < canvas.width - paddleWidth) {
//         paddleX += 7;
//     }
//     else if (leftPressed && paddleX > 0) {
//         paddleX -= 7;
//     }

//     x += dx;
//     y += dy;
// };

// setInterval(draw, 10);
// //======================================================================


// /* STEP 6 - Build the brick field

// Jeg har kopieret det ovenfor, for at kunne se hvad der bliver ændret 
// og skriver så små kommentarer ud for de linjer der blievr opdateret 
// her i forhold til de ovenfor i step 5.*/

// var ballRadius = 10;
// var x = canvas.width / 2;
// var y = canvas.height - 30;
// var dx = 2;
// var dy = -2;
// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width - paddleWidth) / 2;
// var rightPressed = false;
// var leftPressed = false;

// /*Herunder er de variabler der er med til at definere informationer
// om vores bricks width, height, row & columns - NYT TILFØJET*/
// var brickRowCount = 3;
// var brickColumnCount = 5;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;

// /*Der bliver lavet et 2-dimentionelt array, som vil indeholde bricks
// columns (c), som på tur vil indeholde bricks rows (r). Bricks rows vil
// på tur indeholde et objekt med x og y positionerne for at tegne bricks 
// på vores canvas. Den vil via en loop løbe gennem rows og columns
// og skabe de nye bricks - NYT TILFØJET*/
// var bricks = [];
// for (c = 0; c < brickColumnCount; c++) {
//     bricks[c] = [];
//     for (r = 0; r < brickRowCount; r++) {
//         bricks[c][r] = { x: 0, y: 0 };
//     }
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// function keyDownHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = true;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = true;
//     }
// };

// function keyUpHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = false;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = false;
//     }
// };

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// /*Her under kommer en drawBricks funktion som skal bruge variablerne for
// at tegne vores brisk, og for at tegne dem forskudt af hinanden og ikke 
// oveni hinanden på samme position laves der inde i funktionen 2 variabler 
// der skal forskyde brickX og brickY så de ligger sig på de rigtige pladser
// i forhold til dere rows og columns - NYT TILFØJET */
// function drawBricks(){
//     for(c=0; c < brickColumnCount; c++){
//         for(r=0; r < brickRowCount; r++){
//             var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
//             var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
//             bricks[c][r].x = brickX;
//             bricks[c][r].y = brickY;
//             ctx.beginPath();
//             ctx.rect(brickX, brickY, brickWidth, brickHeight);
//             ctx.fillstyle = "#0095DD";
//             ctx.fill();
//             ctx.closePath();
//         }
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBricks(); //NYT TILFØJET
//     drawBall();
//     drawPaddle();

//     //Bounce off of Top og bund
//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//         dx = -dx
//     }

//     if (y + dy < ballRadius) {
//         dy = -dy;
//     }
//     else if (y + dy > canvas.height - ballRadius) {
//         if (x > paddleX && x < paddleX + paddleWidth) {
//             dy = -dy;
//         }
//         else {
//             alert("GAME OVER");
//             document.location.reload();
//         }
//     }

//     if (rightPressed && paddleX < canvas.width - paddleWidth) {
//         paddleX += 7;
//     }
//     else if (leftPressed && paddleX > 0) {
//         paddleX -= 7;
//     }

//     x += dx;
//     y += dy;
// };

// setInterval(draw, 10);
// //======================================================================


// /* STEP 7 - Collision detection

// Jeg har kopieret det ovenfor, for at kunne se hvad der bliver ændret 
// og skriver så små kommentarer ud for de linjer der blievr opdateret 
// her i forhold til de ovenfor i step 6.*/

// var ballRadius = 10;
// var x = canvas.width / 2;
// var y = canvas.height - 30;
// var dx = 2;
// var dy = -2;
// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width - paddleWidth) / 2;
// var rightPressed = false;
// var leftPressed = false;
// var brickRowCount = 3;
// var brickColumnCount = 5;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;

// var bricks = [];
// for (c = 0; c < brickColumnCount; c++) {
//     bricks[c] = [];
//     for (r = 0; r < brickRowCount; r++) {
//         bricks[c][r] = { x: 0, y: 0, status: 1 }; //status er nyt tilføjet
//     }
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// function keyDownHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = true;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = true;
//     }
// };

// function keyUpHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = false;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = false;
//     }
// };

// /*Vi laver en funktion der skal udregne hvorvidt bolden rammer 
// vores bricks eller ej. Funktionen vil gennem gå hver brick og 
// sammenligne hver bricks position med koordinaterne af bolden i 
// hvert frame der bliver tegnet. NYT TILFØJET */
// function collisionDetection(){
//     for(c=0; c < brickColumnCount; c++){
//         for(r=0; r < brickRowCount; r++){
//             var b = bricks[c][r];
//             if(b.status == 1) { 
//                 if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
//                     dy = -dy;
//                     b.status = 0; /*Denne sætning er tilføjet, samt denne if-sætning er pakket 
//                     ind i en ny if-sætning*/
//                 }
//             }
//         }
//     }
// }

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// /*NYT TILFØJET - Vi har tilføjet en if-sætning rundt om alt hvad der før lå
// ude i 2. for-løkke for at kunne bruge statis. Hvis bricks' status er 1 skal 
// de tegnes på lærredet/canvas som vi hidtil har gjort */
// function drawBricks(){
//     for(c=0; c < brickColumnCount; c++){
//         for(r=0; r < brickRowCount; r++){
//             if(bricks [c][r].status == 1){
//                 var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
//                 var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
//                 bricks[c][r].x = brickX;
//                 bricks[c][r].y = brickY;
//                 ctx.beginPath();
//                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
//                 ctx.fillstyle = "#0095DD";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBricks(); 
//     drawBall();
//     drawPaddle();
//     collisionDetection(); //NYT TILFØJET

//     //Bounce off of Top og bund
//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//         dx = -dx
//     }

//     if (y + dy < ballRadius) {
//         dy = -dy;
//     }
//     else if (y + dy > canvas.height - ballRadius) {
//         if (x > paddleX && x < paddleX + paddleWidth) {
//             dy = -dy;
//         }
//         else {
//             alert("GAME OVER");
//             document.location.reload();
//         }
//     }

//     if (rightPressed && paddleX < canvas.width - paddleWidth) {
//         paddleX += 7;
//     }
//     else if (leftPressed && paddleX > 0) {
//         paddleX -= 7;
//     }

//     x += dx;
//     y += dy;
// };

// setInterval(draw, 10);
// //======================================================================


// /* STEP 8 - Track the score and win

// Jeg har kopieret det ovenfor, for at kunne se hvad der bliver ændret 
// og skriver så små kommentarer ud for de linjer der blievr opdateret 
// her i forhold til de ovenfor i step 7.*/

// var ballRadius = 10;
// var x = canvas.width / 2;
// var y = canvas.height - 30;
// var dx = 2;
// var dy = -2;
// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width - paddleWidth) / 2;
// var rightPressed = false;
// var leftPressed = false;
// var brickRowCount = 3;
// var brickColumnCount = 5;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;
// var score = 0;

// var bricks = [];
// for (c = 0; c < brickColumnCount; c++) {
//     bricks[c] = [];
//     for (r = 0; r < brickRowCount; r++) {
//         bricks[c][r] = { x: 0, y: 0, status: 1 }; 
//     }
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);

// function keyDownHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = true;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = true;
//     }
// };

// function keyUpHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = false;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = false;
//     }
// };

// function collisionDetection(){
//     for(c=0; c < brickColumnCount; c++){
//         for(r=0; r < brickRowCount; r++){
//             var b = bricks[c][r];
//             if(b.status == 1) { 
//                 if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
//                     dy = -dy;
//                     b.status = 0; 
//                     score++; //NYT TILFØJET - opdaterer scoren hver gang en brick rammes

//                     //Tilføjer ny if-sætning for at give en "Vinder"-besked når alle bricks er fjernet
//                     if(score == brickRowCount*brickColumnCount){
//                         alert("YOU WIN, CONGRATULATIONS!");
//                         document.location.reload();
//                     }
//                 }
//             }
//         }
//     }
// };

// /*Vi tilføjer en funktion til at kunne lave et display der kan skabe
// og opdatere vores score. */
// function drawScore(){
//     ctx.font = "16px Arial";
//     ctx.fullStyle = "#0095DD";
//     ctx.fillText("Score: " + score, 8, 20); /*font skaber teksten størrelse
//      og font, mens fillText bestemmer hvad teksten skal være, og hvor den 
//      skal placeres på vores canvas. Første parameter er selve teksten, næste
//      parameter fortæller hvad den nuværende score er, de 2 sidste parametre 
//      er koordinaterne for hvor teksten vil blive placeret.*/
// }

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// function drawBricks(){
//     for(c=0; c < brickColumnCount; c++){
//         for(r=0; r < brickRowCount; r++){
//             if(bricks [c][r].status == 1){
//                 var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
//                 var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
//                 bricks[c][r].x = brickX;
//                 bricks[c][r].y = brickY;
//                 ctx.beginPath();
//                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
//                 ctx.fillstyle = "#0095DD";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBricks(); 
//     drawBall();
//     drawPaddle();
//     drawScore(); //NYT TILFØJET
//     collisionDetection();

//     //Bounce off of Top og bund
//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//         dx = -dx
//     }

//     if (y + dy < ballRadius) {
//         dy = -dy;
//     }
//     else if (y + dy > canvas.height - ballRadius) {
//         if (x > paddleX && x < paddleX + paddleWidth) {
//             dy = -dy;
//         }
//         else {
//             alert("GAME OVER");
//             document.location.reload();
//         }
//     }

//     if (rightPressed && paddleX < canvas.width - paddleWidth) {
//         paddleX += 7;
//     }
//     else if (leftPressed && paddleX > 0) {
//         paddleX -= 7;
//     }

//     x += dx;
//     y += dy;
// };

// setInterval(draw, 10);
// //======================================================================


// /* STEP 9 - Mouse controls

// Jeg har kopieret det ovenfor, for at kunne se hvad der bliver ændret 
// og skriver så små kommentarer ud for de linjer der blievr opdateret 
// her i forhold til de ovenfor i step 8.*/

// var ballRadius = 10;
// var x = canvas.width / 2;
// var y = canvas.height - 30;
// var dx = 2;
// var dy = -2;
// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width - paddleWidth) / 2;
// var rightPressed = false;
// var leftPressed = false;
// var brickRowCount = 3;
// var brickColumnCount = 5;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;
// var score = 0;

// var bricks = [];
// for (c = 0; c < brickColumnCount; c++) {
//     bricks[c] = [];
//     for (r = 0; r < brickRowCount; r++) {
//         bricks[c][r] = { x: 0, y: 0, status: 1 }; 
//     }
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false); //Nyt tilføjet for at lytte på musens bevægelser

// /*Vi laver en funktion der forbinder musen og vores paddle ved at finde 
// ud af hvor musen er på canvas - NYT TILFØJET */
// function mouseMoveHandler(e){
//     var relativeX = e.clientX - canvas.offsetLeft;
//     if(relativeX > 0 && relativeX < canvas.width){
//         paddleX = relativeX - paddleWidth/2;
//     }
// }

// function keyDownHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = true;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = true;
//     }
// };

// function keyUpHandler(e) {
//     if (e.keyCode == 39) {
//         rightPressed = false;
//     }
//     else if (e.keyCode == 37) {
//         leftPressed = false;
//     }
// };

// function collisionDetection(){
//     for(c=0; c < brickColumnCount; c++){
//         for(r=0; r < brickRowCount; r++){
//             var b = bricks[c][r];
//             if(b.status == 1) { 
//                 if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
//                     dy = -dy;
//                     b.status = 0; 
//                     score++;                     
//                     if(score == brickRowCount*brickColumnCount){
//                         alert("YOU WIN, CONGRATULATIONS!");
//                         document.location.reload();
//                     }
//                 }
//             }
//         }
//     }
// };

// function drawScore(){
//     ctx.font = "16px Arial";
//     ctx.fullStyle = "#0095DD";
//     ctx.fillText("Score: " + score, 8, 20); 
// }

// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// function drawBricks(){
//     for(c=0; c < brickColumnCount; c++){
//         for(r=0; r < brickRowCount; r++){
//             if(bricks [c][r].status == 1){
//                 var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
//                 var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
//                 bricks[c][r].x = brickX;
//                 bricks[c][r].y = brickY;
//                 ctx.beginPath();
//                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
//                 ctx.fillstyle = "#0095DD";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBricks(); 
//     drawBall();
//     drawPaddle();
//     drawScore(); 
//     collisionDetection();

//     //Bounce off of Top og bund
//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//         dx = -dx
//     }

//     if (y + dy < ballRadius) {
//         dy = -dy;
//     }
//     else if (y + dy > canvas.height - ballRadius) {
//         if (x > paddleX && x < paddleX + paddleWidth) {
//             dy = -dy;
//         }
//         else {
//             alert("GAME OVER");
//             document.location.reload();
//         }
//     }

//     if (rightPressed && paddleX < canvas.width - paddleWidth) {
//         paddleX += 7;
//     }
//     else if (leftPressed && paddleX > 0) {
//         paddleX -= 7;
//     }

//     x += dx;
//     y += dy;
// };

// setInterval(draw, 10);
//======================================================================


/* STEP 10 - Finishing up (Giving the player some lives)

Jeg har kopieret det ovenfor, for at kunne se hvad der bliver ændret 
og skriver så små kommentarer ud for de linjer der blievr opdateret 
her i forhold til de ovenfor i step 9.*/

var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 3;
var dy = -3;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3; //NYT TILFØJET

var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }; 
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false); 

function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
};

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
};

function collisionDetection(){
    for(c=0; c < brickColumnCount; c++){
        for(r=0; r < brickRowCount; r++){
            var b = bricks[c][r];
            if(b.status == 1) { 
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy;
                    b.status = 0; 
                    score++;                     
                    if(score == brickRowCount*brickColumnCount){
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
};

function drawScore(){
    ctx.font = "16px Arial";
    ctx.fullStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20); 
}

/*Vi laver en funktion til at lave en display der viser hvor mange liv 
spilleren har tilbage samt hvor det skal placeres.*/
function drawLives(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width-65, 20)
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

function drawBricks(){
    for(c=0; c < brickColumnCount; c++){
        for(r=0; r < brickRowCount; r++){
            if(bricks [c][r].status == 1){
                var brickX = (c*(brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r*(brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillstyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks(); 
    drawBall();
    drawPaddle();
    drawScore(); 
    drawLives();
    collisionDetection();

    //Bounce off of Top og bund
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
    }

    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            /*NYT TILFØJET: Vi fjerner de alert linjen samt reload linjen og erstatter
            med følgende if-else sætning. Vi gør sådan så antal af liv bliver 
            mindre til der ikke er flere */
            lives--;
            if(!lives){
                alert("GAME OVER");
                document.location.reload();
            }
            else{
                x = canvas.width/2;
                y = canvas.height-30;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
};

//Vi sletter setInterval(draw, 10) med følgende:
draw();