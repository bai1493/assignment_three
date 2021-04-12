var vidCapture,cTracker,drawCanvas;
let p,v,r;


function setup(){
noStroke();

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




};

function draw(){

p = color(114,0,114); //purple
v = color(114,0,247); //violet
r = color(221,98,138); //rose

	//invert image so its the same as you irl
	translate(vidCapture.width,0);
	scale(-1,1);

	//image(vidCapture, 0, 0);

	var pos = cTracker.getCurrentPosition();

	background(255,50);
		fill(p);
		rect(200,80, 100, 100);
		fill(v);
		rect(400,80, 100, 100);
		fill(r);
		rect(300, 275, 100, 100);

	if(pos){
		var x = pos[62][0];
var y = pos[62][1];
		//console.log(pos[62][0], pos[62][1]);
			//ellipse would need x,y,d

			if(x > 200 && x < 300 && y > 80 && y < 130){

			fill(p);
			
			ellipse(x,y, 10);
		}

if(x > 400 && x < 500 && y > 80 && y < 180){

			fill(v);
			
			ellipse(x,y, 10);
		}

if(x > 300 && x < 400 && y > 275 && y < 375){

			fill(r);
			
			ellipse(x,y, 10);
		}


		//line(pos[23][0],pos[23][1],pos[23][0]-30,pos[23][1]-30)


		
		//cTracker.draw(drawCanvas);

	}

}