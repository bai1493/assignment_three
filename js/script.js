var vidCapture,cTracker,drawCanvas;
var sSize = 150;
let p,v,r;
let fillVar =0;

function setup(){
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent('container');

	//create video stream w p5 library
	vidCapture = createCapture(VIDEO);
	vidCapture.size(vidCapture.width*2,vidCapture.height*3);
	vidCapture.hide();

	//start tracker
	cTracker = new clm.tracker();
	cTracker.init();
	cTracker.start(vidCapture.elt);
	drawCanvas = document.getElementById('defaultCanvas0');

p = color(114,0,114); //purple
v = color(114,0,247); //violet
r = color(221,98,138); //rose
b = color(151,224,255); //blue


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
		//print(x1 " ", y1 " ");
var x1 = pos[62][0];
var y1 = pos[62][1];

var xStartPoint = [200, 400, 200, 400];
var yStartPoint = [200, 200, 0, 0];
var fillColours = [p,v,r,b];

for (var a in fillColours)
{
	fill(fillColours[a]);
	square(xStartPoint[a], yStartPoint[a], sSize);
}

fill(0);
ellipse(x1,y1,20);

for (var a in xStartPoint)
{
	if(x1 > xStartPoint[a] && x1 < xStartPoint[a]+sSize && y1 > yStartPoint[a] && y1 < yStartPoint[a]+sSize)
	{
		fill(fillColours[a]);
		fillVar = fillColours[a];
		ellipse(x1,y1,20);
	}
}
fill(fillVar);
ellipse(x1,y1, 20);
}
}
// noStroke();
// if(s1Over){
// 	fill(p)
// 	ellipse(x1,y1, 10);
// } else if(s2Over){
// 	fill(v);
// 	ellipse(x1,y1, 10);
// } else if(s3Over){
// 	fill(r);
// 	ellipse(x1,y1, 10);
// };
// let xStartPoint = 100;
// let xStartPoint2 = 300;
// let xStartPoint3 = 400;
// let yStartPoint = 80;
// let yStartPoint2 = 175;
	
// 		fill(p);
// 		square(xStartPoint,yStartPoint, sSize);
// 		fill(v);
// 		square(xStartPoint3,yStartPoint, sSize);
// 		fill(r);
// 		square(xStartPoint2, yStartPoint2, sSize);



// 		//console.log(pos[62][0], pos[62][1]);
// 			//ellipse would need x,y,d
// fill(0);
// ellipse(x1,y1,20);

// if(x1 > xStartPoint && x1 < xStartPoint+sSize && y1 > yStartPoint && y1 < yStartPoint+sSize){

// 			fill(p);
// 			fillVar = p;
// 			ellipse(x1,y1, 20);
// 		}

// if(x1 > xStartPoint3 && x1 < xStartPoint3+sSize && y1 > yStartPoint && y1 < yStartPoint+sSize){

// 			fill(v);
// 			fillVar = v;
// 			ellipse(x1,y1, 20);
// 		}

// if(x1 > xStartPoint2 && x1 < xStartPoint2+sSize && y1 > yStartPoint2 && y1 < yStartPoint2+sSize){

// 			fill(r);
// 			fillVar = r;
// 			ellipse(x1,y1, 20);
// 		}
// 		fill(fillVar);
// 		ellipse(x1,y1, 20);
// 		//line(pos[23][0],pos[23][1],pos[23][0]-30,pos[23][1]-30)

// //console.log(pmouseX, pmouseY);
		
// 		//cTracker.draw(drawCanvas);
// 			}

// }
// function update(x, y){
// if(overS1(200, 80, sSize)){
// 	s1Over = true;
// 	s2Over = false;
// 	s3Over = false;
// } else if(overS2(400, 80, sSize)){
// 	s1Over = false;
// 	s2Over = true;
// 	s3Over = false;
// } else if(overS3(300, 275, sSize)){
// 	s1Over = false;
// 	s2Over = false;
// 	s3Over = true;
// } else {
// 	overS1 = overS2 = overS3 = false;
// }

// }

// function overS1(x,y,size){
// 	if(x1 >= x && x1 <= x+size && y1 >= y && <= y+size){
// 		return = true;
// 	} else {
// 		return = false;
// 	}
// }

// function overS2(x,y,size){
// 	if(x1 >= x && x1 <= x+size && y1 >= y && <= y+size){
// 		return = true;
// 	} else {
// 		return = false;
// 	}
// }

// function overS3(x,y,size){
// 	if(x1 >= x && x1 <= x+size && y1 >= y && <= y+size){
// 		return = true;
// 	} else {
// 		return = false;
// 	}
// }
