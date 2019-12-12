var Particle = /** @class */ (function () {
    function Particle() {
        this.position = createVector(windowWidth / 2 + random(-100, 100), windowHeight);
        this.velocity = createVector(random(-2, 2), random(-5, -10));
    }
    Particle.prototype.run = function () {
        this.updateParticle();
        this.displayParticle();
    };
    Particle.prototype.updateParticle = function () {
        if (this.position.x < 0) {
            this.position.x = windowWidth;
        }
        else if (this.position.x > windowWidth) {
            this.position.x = 0;
        }
        if (this.position.y < 0) {
            this.position.y = windowHeight;
        }
        this.position.add(this.velocity);
    };
    Particle.prototype.displayParticle = function () {
        fill(255);
        rect(this.position.x, this.position.y, 55, 55);
    };
    return Particle;
}());
var ParticleSystem = /** @class */ (function () {
    function ParticleSystem() {
        this.particles = [];
    }
    ParticleSystem.prototype.addParticle = function () {
        var particle = new Particle();
        this.particles.push(particle);
    };
    ParticleSystem.prototype.runParticles = function () {
        clear();
        background(31, 31, 28);
        this.particles.forEach(function (element) {
            element.run();
            background(1);
        });
    };
    return ParticleSystem;
}());
var colors;
var ps;
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
//# sourceMappingURL=build.js.map