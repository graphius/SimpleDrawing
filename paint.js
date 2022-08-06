function paint(r, g, b, a, sw){
  //this.r = r;
  //this.g = g;
  //this.b = b;
  //this.a = a;
  //this.sw = sw;

  if (sw == 0){
    let d = dist(mouseX, mouseY, pmouseX, pmouseY);
    //this.sw = map(d, 0, 16, 16,2)
  }
  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
  strokeWeight(sw);
  //stroke(this.r, this.g, this.b, this.a);

  stroke(r, g, b, a);
  if(mouseIsPressed){

    line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}

function sred(){
  r = 255;
  g = 0;
  b = 0;
  //createP("Red");
}

function sblue(){
  r = 0;
  g = 0;
  b = 255;
  //createP("Blue");
}

function sblack(){
  r = 0;
  g = 0;
  b = 0;
  //createP("Black");
}

function sgreen(){
  r = 0;
  g = 255;
  b = 0;
  //createP("Green");
}

//colour picker
// function colpick(){
//   r = 255;
//   g = 0;
//   b = 0;
//
//
// }
