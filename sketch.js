let img1,img2,img3 ;
let f1,f2,f3;
let song ;

function preload(){
  song = loadSound("assets/dawnofchange.mp3")
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER)
  textAlign(CENTER)

 img1= loadImage("assets/image1.jpeg") ; 
 img2= loadImage("assets/image2.jpeg") ;
 img3= loadImage("assets/image3.jpeg") ;

  f1=loadFont("assets/font1.ttf");
  f2=loadFont("assets/font2.ttf");
  f3=loadFont("assets/font3.ttf");
  
  song.play() ;
}

function draw() {
  background(220);
  
   image(img1, width / 2,height/2 - 125, 100,100) ;
     image(img2, width / 2,height/2, 100,100) ;
  image(img3, width / 2, height/2 +125, 100,100) ;
  
    fill("white")
   textFont(f1,48);
textFont(f1,48);
  text("Empty", width/2, height/2 -125); 
  
  textFont(f2,48);
 text("Struggling", width/2, height/2); 
  
  textFont(f3,48);
  text("Grace", width/2, height/2 +125);

}


function touchStarted() {
  getAudioContext().resume();
}
