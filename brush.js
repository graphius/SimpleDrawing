function paint(r, g, b, a, sw, tool) {
   if(tool == "pencil" || tool == "erase"){
     pencil(r, g, b, 255, sw);

   } else if(tool == 'ink') {
     ink(r, g, b);


   } else {
  if(start) {

    points.push(createVector(mouseX, mouseY));
  }

  if(mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 3 && mouseY < height){

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
}

function spencil() {
    sblack();
    tool = "pencil"
    eraseButton.style("background-color", lwhite);
    pencilButton.style("background-color", dwhite);
    waterButton.style("background-color", lwhite);
    inkButton.style("background-color", lwhite);
}

function swater() {
    sblack();
    tool = "water"
    eraseButton.style("background-color", lwhite);
    pencilButton.style("background-color", lwhite);
    waterButton.style("background-color", dwhite);
    inkButton.style("background-color", lwhite);
}
function sink() {
    sblack();
    tool = "ink"
    eraseButton.style("background-color", lwhite);
    pencilButton.style("background-color", lwhite);
    waterButton.style("background-color", lwhite);
    inkButton.style("background-color", dwhite);
}

function serase(){
  r = 255;
  g = 255;
  b = 255;
  tool = "erase"
  eraseButton.style("background-color", dwhite);
  pencilButton.style("background-color", lwhite);
  waterButton.style("background-color", lwhite);
  inkButton.style("background-color", lwhite);
  return(r, g, b);
}
