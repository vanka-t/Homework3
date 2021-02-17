
var doAnimation = true;

var butterfliez= [];
var m;
var spacing = 100;
var slider1;
var slider2;
var colorSlider;
var moveSlider;
var tintColor = false;
var numFlies = 20;
var wingColors = [];
var xx = -50;//used for butterfly dimensions(horizontal)
var yy = 0; //used for butterfly dimensions(vertical)
var kk = 0; //used for butterfly size
var h;
var s;
var b;


function setup() {
createCanvas(1000,800);
colorMode(HSB); 

slider1 = createSlider(0,200,0); //slider 1 = stroke color change
slider1.position(width/2);

slider2 = createSlider(0,200,0); //slider 1 = position of patterns shift
slider2.position(width/2+250);

var button2 = select('#b2');
button2.mousePressed(startStop);

//for (var k=0; k<(numFlies*numFlies);k++){
 //   wingColors[k] = random(200);
 //  }
        butterfliez.push(new Butterflies(0,0)) ; 
}


function startStop(){ //inspired by past lesson-- start/stop command
    doAnimation = loop();
   if (doAnimation == true){
       loop();
   } else {
       noLoop();
    }
  // doAnimation = !doAnimation;
}

class Butterflies{

    constructor(x, y) {
		//  this.tempR = tr;
		this.x = x;
        this.y = y;
        this.m = 0;
        this.xy = .5;
       this.h = random(250);
       this.s = random(250);
       this.b = random(250);
        
    }

    show(){ //designing butterfly
        //background(this.backgroundColor);

        for (var x=0; x<width; x+=150){
            for (var y=0; y<height; y+=100){
                push();
                translate(x,y);
                
                fill(random(this.m+100,this.m-200),200,100);
               // fill(this.h,200,100);
               
                butterfly();
                pop();
            }
        }
      
        }

    move() {
        this.x +=.5
        this.y +=.2
        //speed
   push();
   translate(this.x,this.y)
   pop();
    }
  
}

function butterfly(){
    beginShape(); // left wing
    curveVertex(xx+110,yy+35);
    curveVertex(xx+110,yy+35);
    curveVertex(xx+65,yy+15);
    curveVertex(xx+80,yy+45);
    curveVertex(xx+65,yy+75);
    curveVertex(xx+75,yy+75);
    curveVertex(xx+105,yy+65);
    curveVertex(xx+105,yy+65);
    endShape();
    
    beginShape(); // right wing
    curveVertex(xx+110,yy+35);
    curveVertex(xx+110,yy+35);
    curveVertex(xx+155,yy+15);
    curveVertex(xx+140,yy+45);
    curveVertex(xx+155,yy+75);
    curveVertex(xx+145,yy+75);
    curveVertex(xx+115,yy+65);
    curveVertex(xx+115,yy+65);
    endShape();
noStroke();
    
    ellipseMode(CORNER);
    fill(0);
    for (var i=39;i<83;i+=11){
        for (var p=37;p<59;p+=10){
            circle(i,p,kk+5); 
        }   
    }
    fill(255,200,90);
    circle(xx+100,yy,kk+15); //head
    ellipse(xx+100,yy+20,kk+15, kk+70); //body

    

}

function draw() {

strokeWeight(2);
background(0);

if(doAnimation){
    colorSlider = slider1.value();
   // scale(colorSlider,colorSlider);
   stroke(random(100,150), colorSlider, 90); //stroke settings
}

moveSlider = slider2.value();

for (var i=0; i<butterfliez.length; i++){
   for(var r=0; r<5;r++){
      
       rotate(cos(r)+moveSlider); //rotation settings
    
    butterfliez[i].show();
    butterfliez[i].move();
   }  
   
}
}



