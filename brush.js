function paint(r, g, b, a, sw){

  if(start) {
    points.push(createVector(mouseX, mouseY));
  }

  if(mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){

  stroke(r, g, b, a);
  strokeWeight(sw);
  noFill();
  beginShape();
  for(let i = 0; i <points.length; i++){
    let x = points[i].x;
    let y = points[i].y;

    vertex(x, y);

    }
  endShape();

}
}

function sred(){
  r = 255;
  g = 0;
  b = 0;
    redButton.style("background-color", dred);
    greenButton.style("background-color", lgreen);
    blueButton.style("background-color", lblue);
    blackButton.style("background-color", lblack);
    whiteButton.style("background-color", lwhite);
    eraseButton.style("background-color", lwhite);

}

function sblue(){
  r = 0;
  g = 0;
  b = 255;
  a = pa;
  redButton.style("background-color", lred);
  greenButton.style("background-color", lgreen);
  blueButton.style("background-color", dblue);
  blackButton.style("background-color", lblack);
  whiteButton.style("background-color", lwhite);
  eraseButton.style("background-color", lwhite);
}

function sblack(){
  r = 0;
  g = 0;
  b = 0;
  a = pa;
  redButton.style("background-color", lred);
  greenButton.style("background-color", lgreen);
  blueButton.style("background-color", lblue);
  blackButton.style("background-color", dblack);
  whiteButton.style("background-color", lwhite);
  eraseButton.style("background-color", lwhite);
}

function sgreen(){
  r = 0;
  g = 255;
  b = 0;
  a = pa;
  redButton.style("background-color", lred);
  greenButton.style("background-color", dgreen);
  blueButton.style("background-color", lblue);
  blackButton.style("background-color", lblack);
  whiteButton.style("background-color", lwhite);
  eraseButton.style("background-color", lwhite);
}

function swhite(){
  r = 255;
  g = 255;
  b = 255;
  a = pa;
  redButton.style("background-color", lred);
  greenButton.style("background-color", lgreen);
  blueButton.style("background-color", lblue);
  blackButton.style("background-color", lblack);
  whiteButton.style("background-color", dwhite);
  eraseButton.style("background-color", lwhite);
}

function serase(){
  r = 255;
  g = 255;
  b = 255;
  a = ea;
  redButton.style("background-color", lred);
  greenButton.style("background-color", lgreen);
  blueButton.style("background-color", lblue);
  blackButton.style("background-color", lblack);
  whiteButton.style("background-color", lwhite);
  eraseButton.style("background-color", dwhite);
}
