class Particle {
  private position: p5.Vector = createVector(
    windowWidth / 2 + random(-100, 100),
    windowHeight
  );
  private velocity: p5.Vector = createVector(random(-2, 2), random(-5, -10));

  constructor() {}

  public run() {
    this.updateParticle();
    this.displayParticle();
  }

  private updateParticle() {
    if (this.position.x < 0) {
      this.position.x = windowWidth;
    } else if (this.position.x > windowWidth) {
      this.position.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = windowHeight;
    }
    this.position.add(this.velocity);
  }

  private displayParticle() {
    fill(255);
    rect(this.position.x, this.position.y, 55, 55);
  }
}
