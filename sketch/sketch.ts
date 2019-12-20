const ps: ParticleSystem = new ParticleSystem();
const maxParticles = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blendMode(ADD);
  imageMode(CENTER);
  noStroke();
}

function draw() {
  background(31, 31, 28);
  if (ps.particles.length < maxParticles) {
    ps.addParticle();
  }
  ps.runParticles();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
