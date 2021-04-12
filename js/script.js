var vidCapture,cTracker,drawCanvas;
var sSize = 150;
let p,v,r;
let fillVar =0;

function setup(){
	var cnv = createCanvas(500,800);
	//create video stream w p5 library
	vidCapture = createCapture(VIDEO);
	vidCapture.size(vidCapture.width*2,vidCapture.height*3);
	vidCapture.hide();

	millisRollover = 0;

	//start tracker
	cTracker = new clm.tracker();
	cTracker.init();
	cTracker.start(vidCapture.elt);
	drawCanvas = document.getElementById('defaultCanvas0');

p = color(114,0,114); //purple
v = color(114,0,247); //violet
r = color(221,98,138); //rose
b = color(151,224,255); //blue

//help from https://p5js.org/examples/input-rollover.html
};

function draw(){
	//invert image so its the same as you irl
	translate(vidCapture.width,0);
	scale(-1,1);


	//image(vidCapture, 0, 0);

	var pos = cTracker.getCurrentPosition();

		background(255,50);

	if(pos){
		//image(vidCapture, 10, 10);


var x1 = pos[62][0]; //x coordinate of nose
var y1 = pos[62][1]; //y coordinate of nose

var xStartPoint = [200, 400, 200, 400]; //square x coordinates start
var yStartPoint = [200, 200, 0, 0]; //square y coordinates start
var fillColours = [p,v,r,b]; //colour variables in array



for (var a in fillColours)
{
	fill(fillColours[a]); //adding fill colors to squares
	square(xStartPoint[a], yStartPoint[a], sSize); //make square based on x,y and size coordinates defined at the top
}

if(millis() == 1000){
	background(random(255),255,255);
}

fill(0); //if start on no square, circle is black
ellipse(x1,y1,20); //make circle based on nose coordinates

for (var a in xStartPoint) //for all squares to keep the colours used based on x and y coordinates of nose
{
	if(x1 > xStartPoint[a] && x1 < xStartPoint[a]+sSize && y1 > yStartPoint[a] && y1 < yStartPoint[a]+sSize)
	{ //change color of circle based on x and y coordinate of nose
		fill(fillColours[a]); //add fill to circle
		fillVar = fillColours[a]; //keep colour of last corresponding square until entering a new one
		ellipse(x1,y1,20); // make circle
	}
}
fill(fillVar); //keeps last colour
ellipse(x1,y1, 20); //make circle with last colour
// cTracker.draw(drawCanvas);
}

}