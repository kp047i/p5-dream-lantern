class Particle {
  private position: p5.Vector = createVector(
    random(0, windowWidth),
    windowHeight
  );
  private velocity: p5.Vector = createVector(random(-1, 1), random(-1, -3));
  private distance: number = 125;
  private aliveTime: number = random(0, 100);
  private sizeWidth: number = random(30, 50);
  private sizeHeight: number = this.sizeWidth * 1.5;
  private center: number = 20;
  private period = random(15, 30);
  private image: p5.Image = createImage(this.center * 2, this.center * 2);
  private amplitude = this.sizeWidth * 2;

  constructor() {
    this.image.loadPixels();
  }

  public run() {
    this.updateParticle();
    this.displayParticle();
  }

  private updateParticle() {
    this.updateRectangle();
    this.updateLight();
  }

private updateRectangle() {
  if (this.position.x + this.sizeWidth < 0) {
    this.position.x = windowWidth;
  } else if (this.position.x > windowWidth) {
    this.position.x = -20;
  }
  if (this.position.y + this.sizeHeight < 0) {
    this.position.y = windowHeight + 20;
  }
  this.aliveTime++;
  this.position.add(this.velocity);
}

  private updateLight() {
    this.distance = 125 + this.amplitude * sin(this.aliveTime / this.period);
    for (let y = 0; y < this.image.height; y++) {
      for (let x = 0; x < this.image.width; x++) {
        let distance = (sq(this.center - x) + sq(this.center - y)) / this.distance;
        let id = (x + y * this.image.width) * 4;
        this.image.pixels[id] = 80 / distance;
        this.image.pixels[id + 1] = 30 / distance;
        this.image.pixels[id + 2] = 10 / distance;
        this.image.pixels[id + 3] = 255 / distance;
      }
    }
    this.image.updatePixels();
  }
  
  private displayParticle() {
    this.displayRectangle();
    this.displayLight();
  }

  private displayRectangle() {
    const startColor: p5.Color = color(31, 31, 28);
    const endColor: p5.Color = color(231, 126, 60);
    for (let i = 0; i < this.sizeHeight; i += 2) {
      let c: p5.Color = lerpColor(startColor, endColor, i / this.sizeHeight);
      fill(c);
      strokeJoin(ROUND);
      rect(this.position.x, this.position.y + i, this.sizeWidth, 2);
    }
  }

  private displayLight() {
    image(
      this.image,
      this.position.x + this.sizeWidth * 0.5,
      this.position.y + this.sizeHeight * 0.75
    );
  }
}
