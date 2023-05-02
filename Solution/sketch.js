
const screenWidth = 500;
const screenHeight = 500;
const frames = 60;
const apWidth = 50
const apHeight = 70
const apTail = 30
const rotAngle = 90
let airfield;

function setup() {
  createCanvas(screenWidth, screenHeight);
  background(200);
  angleMode(DEGREES);
  airField = new AirField(400,400,10);
}

function draw() {
  frameRate(frames)
  background(0);
  airField.checkPlanes();
  airField.flyPlanes();
  airField.showLabels();
}