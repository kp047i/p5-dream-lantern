let colors: p5.Color[];
let ps: ParticleSystem;
function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(ADD);
  ps = new ParticleSystem();
  noStroke();
}

function draw() {
  background(31, 31, 28);
  rect(30, 20, 55, 55);
  ps.runParticles();
  if (ps.particles.length < 3) {
    ps.addParticle();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
