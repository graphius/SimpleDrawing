var canvas;
var img;
var fileName;
var tool = "brush";
const colorEl = document.getElementById("colorpicker");
let colorpick;

var r;
var g;
var b;
var a = 5;
let hr;
let hg;
let hb;
var ea = 255;
var pa = 5;
let sw = 15;

points = [];
start = false;
let saveButton;
let clearButton;
let strokeSlider;
let blueButton;
let blackButton;
let greenButton;
let redButton;
let whiteButton;
let eraseButton;
let penColour;
let inkButton;


let lred = "rgba(255, 0, 0, 0.6)";
let dred = "rgba(255, 0, 0, 1)";
let lgreen = "rgba(100, 255, 100, 0.6)";
let dgreen = "rgba(0, 255, 0, 1)";
let lblue = "rgba(0, 0, 255, 0.6)";
let dblue = "rgba(0, 0, 255, 1)";
let lblack = "rgba(0, 0, 0, 0.6)";
let dblack = "rgba(0, 0, 0, 1)";
let lwhite = "rgba(200, 200, 200, 1)";
let dwhite = "rgba(250, 250, 250, 1)";
