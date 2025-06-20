function setup()
{
    createCanvas(800,400);
    background("skyblue");
}
function draw()
{
    background(0);

  // Style the arc.
  noStroke();
  fill(255, 255, 0);

  // Update start and stop angles.
  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;

  // Draw the arc.
  arc(50, 50, 80, 80, startAngle, endAngle, PIE);
}