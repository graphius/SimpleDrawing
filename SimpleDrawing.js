
function setup() {
  //createCanvas(window.innerWidth, window.innerHeight);
  canvas = createCanvas(windowWidth, windowHeight - 20);
  canvas.drop(loadFile);
  noCursor();

    background(255);

    //let p = createP('clear then drag image to upload, or just draw');
    //p.position(canvas.width - 800,-10);



    eraseButton = select('#serase');
    eraseButton.style("background-color", lwhite);
    eraseButton.mousePressed(serase);
    pencilButton = select('#spencil');
    pencilButton.style("background-color", lwhite);
    pencilButton.mousePressed(spencil);
    waterButton = select('#swater');
    waterButton.style("background-color", dwhite);
    waterButton.mousePressed(swater);
    inkButton = select('#sink');
    inkButton.style("background-color", lwhite);
    inkButton.mousePressed(sink);
    strokeSlider = select('#strokeSlider');
    saveButton = select("#saveImage");
    saveButton.style("background-color", "lightGrey");
    saveButton.mousePressed(saveimage);
    clearButton = select('#clearImage');
    clearButton.style("background-color", "LightGrey");
    clearButton.mousePressed(clearimage);
    filename = createInput('simpleDrawing');
    filename.changed(saveimage);
    colourPicker = select("#penColour");


}

function draw() {
   //cursorSize(sw, r, g, b);


  Picker();
  sw = strokeSlider.value();
  stroke(sw);
  cursor(CROSS);


  paint(r, g, b, a, sw, tool);

}

function mousePressed() {
  start = true;
  points = [];
}

function mouseReleased() {
  start = false;
}
