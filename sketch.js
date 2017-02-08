
var num = 2000;
var range = 90;

var ax = [];
var ay = [];

var valueR = 255;
var valueG = 255;
var valueB = 255;

var valueCircleR = 255;
var valueCircleG = 0;
var valueCircleB = 162;

var StrokeR = 255;
var StrokeG = 0;
var StrokeB = 162;
var StrokeT = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(10);
}

function draw() {
  background(valueR, valueG, valueB);

  // Shift all elements 1 place to the left
  for ( var i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] = mouseX + random(-range, range);
  ay[num - 1] = mouseY + random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw the lines connecting the points
  for ( var j = 1; j < num; j++ ) {
    var val = j / num * 204.0 + 51;
    stroke(StrokeR, StrokeG, StrokeB, StrokeT);

    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    line(ax[j - 3], ay[j - 3], ax[j], ay[j]);
  //draw the circles at points
    noStroke();
    fill(valueCircleR, valueCircleG, valueCircleB);
    //random sizes + transparency
    var a = random(4,10);
    var b = random(40, 250);
    ellipse(ax[j], ay[j], a, a);
  }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    valueR = 0;
    valueG = 47;
    valueB = 167;

    valueCircleR = 255;
    valueCircleG = 255;
    valueCircleB = 255;

    StrokeR = 255;
    StrokeG = 255;
    StrokeB = 255;
    StrokeT = 90;

  } else if (keyCode === RIGHT_ARROW) {
    valueR = 255;
    valueG = 255;
    valueB = 255;

    valueCircleR = 255;
    valueCircleG = 0;
    valueCircleB = 162;

    StrokeR = 255;
    StrokeG = 0;
    StrokeB = 162;
    StrokeT = 80;
  }
  return false;
}
