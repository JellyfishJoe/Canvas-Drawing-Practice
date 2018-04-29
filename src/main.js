const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");

/*
//////////RED CIRCLE WITH BLACK OUTLINE
ctx.strokeStyle = "black";
ctx.fillStyle = "red";
ctx.fillRect(300, 200, 50, 50);
ctx.strokeRect(300, 200, 50, 50);
*/

/*
//////////RED SQUARE WITH BLACK OUTLINE
ctx.beginPath();
ctx.arc(325, 170, 25, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();
*/

const { width: w, height: h } = canvas;

/*
=======

//////////CONSTANT FOR ALL FOLLOWING FUNCTIONS
const { width: w, height: h } = canvas;
 
 /*
//////////STARFIELD
ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);
ctx.fillStyle = "#555";

let x, y, radius;

for (let i = 0; i < 550; i++) {
	x = Math.random() * w;
	y = Math.random() * h;
	radius = Math.random() * 3;

	// Draw the star!
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	ctx.fill();
}
*/

/*
=======

/*
//////////REPEATED TEXT AESTHETIC
ctx.font = "20pt courier";

const center = w / 2;
ctx.textAlign = "center";

for (let i = 0; i < 11; i++) {
	ctx.fillText("if you're in the game", center, i * 40);
}
ctx.strokeText("strokes the world", center, h - 30);
*/

/*
const img = new Image();
img.src = "res/images/rick.png";
img.addEventListener("load", draw, false);

function draw() {
	for (let i = 0; i < 100; i++) {
		const x = Math.random() * w - 50;
		const y = Math.random() * h - 100;
		ctx.drawImage(img, x, y);
	}
}
*/

/*
////////// I don't know what the fuck this does
const img = new Image();
img.src = "res/image/snowflake.png";
img.addEventListener("load", draw, false);

for (let i = 0; i < 100; i++) {
	let x = Math.random() * w;
	let y = Math.random() * h;
	let scale = Math.random();

	ctx.drawImage(img, x, y, width * scale, height * scale);
}
*/

/*
//////////SNOWFLAKE FIELD
const img = new Image();
img.src = "res/images/snowflake2.png";
img.addEventListener("load", draw, false);


function draw() {

	for (let i = 0; i < 50; i++) {
		let x = Math.random() * w;
		let y = Math.random() * h;
		let scale = Math.random() / 20;

		ctx.drawImage(img, x, y, 2240 * scale, 2240 * scale);
	}

}
*/

/*
//////////REPEATED IMAGE EFFECT
const img = new Image();
img.src = "res/images/rick.png";
img.addEventListener("load", draw, false)

// Draw the original
function draw() {
	//ctx.drawImage(img, w / 2, h / 2);

	// Draw cropped images
	for (let i = 0; i < 22; i++) {
		ctx.drawImage(
			img,
			// source
			32, 0, 250, 500,
			// destination location
			i * 20, i * 20,
			//destination scale
			i * 0.2 * 53, i * 0.2 * 75
			);
	}

}
*/

/*
//////////SAVE AND RESTORE RECTANGLES
function draw() {
	for (let i = 0; i < 100; i++) {
		const x = Math.random() * w;
		const y = Math.random() * h;
		ctx.fillRect(x, y, 50, 50);
	}
}

ctx.fillStyle = "black";
draw();

ctx.save();
ctx.fillStyle = "red";
draw();
ctx.restore;

// Back in black!
draw();
*/


////////// Psychedelic Circle
ctx.translate(w / 2, h / 2);

var color = 0;
var start = 1;
var started = 0;
var multiplier = 1;

document.getElementById("starter").addEventListener("click", choicyBoi);

document.getElementById("stopper").addEventListener("click", stoppyBoi);

document.getElementById("next").addEventListener("click", next);

document.getElementById("forwards").addEventListener("click", setForwards);

document.getElementById("backwards").addEventListener("click", setBackwards);


function choicyBoi() {
	start = 1;
	doIt();
}


function doIt() {
	if(start == 1) {
		clear();
		draw();
		window.setTimeout(clicker, 0);
		//console.log("worked");
	}else {
		//console.log("failed");
	}
}

function draw() {


	for (let ring = 1; ring < 53; ring++) {
		ctx.fillStyle = `hsl(${(ring + color) * 15 }, 90%, 50%)`;
		for (let dots = 0; dots < ring * 6; dots++) {
			ctx.rotate((Math.PI * 2) / (ring * 6));
			ctx.beginPath();
			ctx.arc(0, ring * 15, 7, 0, Math.PI * 2, true);
			ctx.fill();
		}
	}

	if (multiplier == 1) {
		if (color < 360) {
			color++;
		} else {
			color = 0;
		}
	} else if (multiplier == -1) {
		if (color > -360) {
			color--;
		} else {
			color = 0;
		}
	}
	console.log(color);	
	//console.log("filled");
}

function next() {
	//start = 1;
	//window.setTimeout(doIt, 1);
	//window.setTimeout(stoppyBoi, 2);
	clear();
	draw();
}


	
function clear() {
	ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);
	//console.log("cleared");
}

function clicker() {
		doIt();
		//console.log("repeated");
	//document.getElementById("filler").click();
}

function stoppyBoi() {
	start = 0;
}

function setForwards() {
	multiplier = 1;
	console.log(multiplier);
}

function setBackwards() {
	multiplier = -1;
	console.log(multiplier);
}