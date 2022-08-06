 function Picker() {

    lcolor = colourPicker.value();
    hexToRgb(lcolor);
    if (tool !== "erase"){
      sblack();
    }

}

function hexToRgb(hex) {
    hex = hex.replace('#', '');

    var bigint = parseInt(hex, 16);

    hr = (bigint >> 16) & 255;
    hg = (bigint >> 8) & 255;
    hb = bigint & 255;

}

function sblack(){
  r = hr;
  g = hg;
  b = hb;
  a = pa;
//  eraseButton.style("background-color", lwhite);
}
