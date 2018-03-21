class Game {
    constructor(color) {
        this.canvas = document.querySelector("#myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.ball = new Ball(color);

        this.paddle = new Paddle();
        this.paddle.paddleX = this.canvas.width / 2;
        this.paddle.paddleY = this.canvas.height - this.paddle.paddleHeight/2;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // drawBricks();
        this.ball.drawBall(this.ctx);
        this.paddle.drawPaddle(this.ctx);
        // drawScore();
        // drawLives();
        // collisionDetection();

        //Bounce off of Top og bund
        if (this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius || this.ball.x + this.ball.dx < this.ball.radius) {
            // this.ball.dx = -this.ball.dx
            this.ball.dx *= -1
        }

        if (this.ball.y + this.ball.dy < this.ball.radius) {
            this.ball.dy = -this.ball.dy;
        }
        else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.radius) {
            // if (x > paddleX && x < paddleX + paddleWidth) {
            //     dy = -dy;
            // }
            // else {
            //     lives--;
            //     if (!lives) {
            //         alert("GAME OVER");
            //         document.location.reload();
            //     }
            //     else {
            //         x = canvas.width / 2;
            //         y = canvas.height - 30;
            //         paddleX = (canvas.width - paddleWidth) / 2;
            //     }
            // }
        }

        // if (rightPressed && paddleX < canvas.width - paddleWidth) {
        //     paddleX += 7;
        // }
        // else if (leftPressed && paddleX > 0) {
        //     paddleX -= 7;
        // }

        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;
        // requestAnimationFrame(draw);
    };

    play() {
        setInterval(() => this.draw(), 10);
    }
};

class Ball {
    constructor(color) {
        //properties
        this.radius = 20;
        this.color = color;
        this.x = 100;
        this.y = 200;
        this.dx = 2; //d står for direction - x = vandret
        this.dy = -2; //y er lodret
        // this.speed = 10;
        // this.setSpeed(speed);
    }

    //METHODS

    // setSpeed(level){
    //     switch(levevl){
    //         case 1: this.speed = 20; this.dx = 1; this.dy = -1; break;
    //         case 2: this.speed = 10; this.dx = 1; this.dy = -1; break;
    //         case 3: this.speed = 10; this.dx = 2; this.dy = -2; break;
    //         case 4: this.speed = 10; this.dx = 4; this.dy = -4; break;
    //         case 5: this.speed = 5; this.dx = 4; this.dy = -4; break;
    //         default: this.speed = 10; this.dx = 2; this.dy = -2; break;
    //     }
    // }

    drawBall(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    };
};

class Paddle {
    constructor(x, y) {
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = x; //(this.canvas.width - this.paddleWidth) / 2;
        this.paddleY = y;
    }

    drawPaddle(ctx) {
        ctx.beginPath();
        ctx.rect(this.paddleX - this.paddleWidth/2, this.paddleY - this.paddleHeight/2, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    };
};

let game = new Game("orange");
game.play();
//console.log("Se her: ", game.ball);