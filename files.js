function loadFile(file) {
   img = createImg(file.data, "unable to load");
   img.hide();
   image(img, 0, 0, width, height);


}

function saveimage() {
  save('simpleDrawing.png');
    //save(filename.value() + ".png");
}

function clearimage() {
  background(255);
  strokeWeight(2);
  stroke(0);
  rect(0, 0, width, height);
  sblack();
}
