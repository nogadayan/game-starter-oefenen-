var x, y, v;

function setup() {
  createCanvas(500, 400);

  x = 0;
  y = 20;
  v = 1;
}

function draw() {
  background(225);

  ellipse(x,y,50,50);
  x = x + 7;

  if(x >= 500) {
    v = -1;
  }
}
