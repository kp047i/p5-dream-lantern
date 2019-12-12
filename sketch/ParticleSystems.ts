class ParticleSystem {
  particle: Particle;
  particles: Array<Particle> = [];

  constructor() {}

  addParticle() {
    const particle = new Particle();
    this.particles.push(particle);
  }

  runParticles() {
    clear();
    background(31, 31, 28);
    this.particles.forEach(function(element) {
      element.run();
      background(1);
    });
  }
}
