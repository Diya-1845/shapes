function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  background(200);
  
  // Draw rectangle
  fill(66, 245, 120);
  rect(50, 50, 150, 100);

  // Draw ellipse
  fill(245, 66, 135);
  ellipse(300, 150, 100, 100);

  // Draw line
  stroke(50, 81, 168); 
  strokeWeight(2);
  line(50, 250, 250, 250);
  
//draw triangle
  fill(245, 218, 66);
  stroke(0); 
  strokeWeight(2); 
  triangle(400, 300, 500, 200, 600, 300); 
}
