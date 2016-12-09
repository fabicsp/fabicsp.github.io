'use strict';

var createdBalls = 0;
var colors = ["blue", "red", "green", "yellow", "brown", "orange", "purple", "white", "cyan", "DarkSlateGray"];

var canvas = {
	element: document.querySelector('#canvas'),
	width: window.innerWidth,
	height: window.innerHeight,
	minSize:(window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth,
	initialize: function () {
		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		document.body.appendChild(this.element);
	}
};

window.addEventListener("keypress", function (e) {
  if (e.charCode == 45 && createdBalls >= 0) {
    canvas.element.removeChild(this.canvas.element.childNodes[0])
    createdBalls--;
  }
  else if (createdBalls >= 9){console.log("Maximum reached")}
  else if(createdBalls < 9 && e.charCode == 43){
    createdBalls++;
    var xCoordinate =  Math.floor(Math.random() * canvas.width * 0.9);
  	var yCoordinate =  Math.floor(Math.random() * canvas.height * 0.9);
  	var randomNumber = Math.floor(Math.random() * colors.length);
  	var selectedColor = colors[randomNumber];
  	Ball.create(selectedColor, - randomNumber+3, - randomNumber*2).draw(xCoordinate, yCoordinate);
  } else {console.log("Minimum reached")}
});

var Ball = {
	create: function (color, dx, dy) {
		var newBall = Object.create(this);
		newBall.dx = dx;
		newBall.dy = dy;
		newBall.secretx = dx;
		newBall.secrety = dy;
		newBall.popps = 0;
		newBall.width = canvas.minSize * 0.1;
		newBall.height = canvas.minSize * 0.1;
		newBall.element = document.createElement('div');
		newBall.element.style.backgroundColor = color;
		newBall.element.style.width = newBall.width + 'px';
		newBall.element.style.height = newBall.height + 'px';
		newBall.element.className += 'ball';
		newBall.width = parseInt(newBall.element.style.width);
		newBall.height = parseInt(newBall.element.style.height);
		canvas.element.appendChild(newBall.element);
		newBall.element.addEventListener('click', function () {
			if (newBall.className != "balli") {
				newBall.dx = 0;
				newBall.dy = 0;
				newBall.className = "balli";
				return false;
			} else if(newBall.className == "balli"){
				newBall.dx = newBall.secretx
				newBall.dy = newBall.secrety
				newBall.className = "ball";
				return false;
			}
		})
		return newBall;
	},
	moveTo: function (x, y) {
		this.element.style.left = x + 'px';
		this.element.style.top = y + 'px';
	},
	changeDirection: function (x, y) {
		if (x < 0 || x > canvas.width - this.width-10) {
			this.dx = -this.dx;
			this.secretx = -this.secretx
		}
		if (y < 0 || y > canvas.height - this.height+10) {
			this.dy = -this.dy;
			this.secrety = -this.secrety;
		}
	},
	draw: function (x, y) {
		this.moveTo(x, y);
		var ball = this;
		setTimeout(function () {
			ball.changeDirection(x, y);
			ball.draw(x + ball.dx, y + ball.dy);
		}, 100);
	}
};

canvas.initialize();

var ball1 = Ball.create("blue", 7, 6);

ball1.draw(70, 70);
