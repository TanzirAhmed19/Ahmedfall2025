let clicks = 0;

const poseNames = [
  "Front Double Biceps",
  "Side Chest",
  "Lat Spread",
  "Most Muscular"
];

function setup() {
  const holder = document.getElementById("p5Holder");
  const w = holder ? holder.clientWidth : 800;
  createCanvas(w, 420).parent("p5Holder");
}

function windowResized() {
  const holder = document.getElementById("p5Holder");
  if (holder) resizeCanvas(holder.clientWidth, height);
}

function draw() {
  background(245);

  fill(0);
  noStroke();
  textSize(16);
  let pose = clicks % 4;
  text("Pose: " + poseNames[pose], 14, 44);

  // Figure position //
  let x = width / 2;
  let y = height / 2 + 60;

  stroke(0);
  strokeWeight(5);
  noFill();

  // HEAD //
  circle(x, y - 140, 44);

  // FACE (eyes + brows + mouth) //
  // eyes //
  fill(0);
  noStroke();
  circle(x - 8, y - 146, 4);
  circle(x + 8, y - 146, 4);

  // eyebrows //
  stroke(0);
  strokeWeight(3);
  line(x - 14, y - 156, x - 4, y - 160);
  line(x + 4, y - 160, x + 14, y - 156);

  // mouth (changes slightly by pose) //
  noFill();
  stroke(0);
  strokeWeight(3);
  if (pose === 3) {
    // intense grin for most muscular //
    arc(x, y - 132, 18, 12, 0, PI);
  } else {
    // relaxed smile //
    arc(x, y - 132, 18, 12, 0, PI);
  }

  // BODY //
  strokeWeight(5);
  line(x, y - 118, x, y - 40); // torso //

  // legs //
  line(x, y - 40, x - 25, y + 30);
  line(x, y - 40, x + 25, y + 30);

  // ARMS (POSES) //
  if (pose === 0) {
    // Front double biceps //
    line(x, y - 105, x - 55, y - 150);
    line(x, y - 105, x + 55, y - 150);
    line(x - 55, y - 150, x - 75, y - 120);
    line(x + 55, y - 150, x + 75, y - 120);
  } else if (pose === 1) {
    // Side chest //
    line(x, y - 105, x + 65, y - 85);
    line(x + 65, y - 85, x + 20, y - 65);
    line(x, y - 105, x - 40, y - 70);
  } else if (pose === 2) {
    // Lat spread //
    line(x, y - 105, x - 85, y - 95);
    line(x, y - 105, x + 85, y - 95);
    line(x - 85, y - 95, x - 55, y - 65);
    line(x + 85, y - 95, x + 55, y - 65);
  } else {
    // Most muscular //
    line(x, y - 105, x - 55, y - 80);
    line(x, y - 105, x + 55, y - 80);
    line(x - 55, y - 80, x - 15, y - 65);
    line(x + 55, y - 80, x + 15, y - 65);
  }
}

function mousePressed() {
  clicks++;
}

function keyPressed() {
  if (key === "r" || key === "R") clicks = 0;
}