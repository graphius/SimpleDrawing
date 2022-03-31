
function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  canvas = createCanvas(900, 800);
  canvas.drop(loadFile);
  noCursor();
  //colorMode(RBG);
    background(255);
    stroke(0);
    rect(0, 0, width, height);

    redButton = select('#sred');
    redButton.style("background-color", lred);
    redButton.mousePressed(sred);
    greenButton = select('#sgreen');
    greenButton.style("background-color", lgreen);
    greenButton.mousePressed(sgreen);
    blueButton = select("#sblue");
    blueButton.style("background-color", lblue);
    blueButton.mousePressed(sblue);
    blackButton = select("#sblack");
    blackButton.style("background-color", dblack);
    blackButton.style("color", "white");
    blackButton.mousePressed(sblack);
    whiteButton = select('#swhite');
    whiteButton.style("background-color", lwhite);
    whiteButton.style("color", "black");
    whiteButton.mousePressed(swhite);
    eraseButton = select('#serase');
    eraseButton.style("background-color", lwhite);

    eraseButton.mousePressed(serase);
    strokeSlider = select('#strokeSlider');
    saveButton = select("#saveImage");
    saveButton.style("background-color", "lightGrey");
    saveButton.mousePressed(saveimage);
    clearButton = select('#clearImage');
    clearButton.style("background-color", "LightGrey");
    clearButton.mousePressed(clearimage);
    //filename = createInput('simpleDrawing');
    //filename.changed(saveimage);


}

function draw() {
  cursor(CROSS);
  let sw = strokeSlider.value();
  paint(r, g, b, a, sw);

}




function mousePressed() {
  start = true;
  points = [];

}

function mouseReleased() {
  start = false;
}
