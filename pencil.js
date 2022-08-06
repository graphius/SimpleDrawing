function pencil (r, g, b, a, sw){

  stroke(this.r, this.g, this.b, 255);
  strokeWeight(sw);
  noFill();
  if (mouseIsPressed === true) {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}
