var Particle = /** @class */ (function () {
    function Particle() {
        this.position = createVector(random(0, windowWidth), windowHeight);
        this.velocity = createVector(random(-1, 1), random(-1, -3));
        this.distance = 125;
        this.aliveTime = random(0, 100);
        this.sizeWidth = random(30, 50);
        this.sizeHeight = this.sizeWidth * 1.5;
        this.center = 20;
        this.period = random(15, 30);
        this.image = createImage(this.center * 2, this.center * 2);
        this.amplitude = this.sizeWidth * 2;
        this.image.loadPixels();
    }
    Particle.prototype.run = function () {
        this.updateParticle();
        this.displayParticle();
    };
    Particle.prototype.updateParticle = function () {
        this.updateRectangle();
        this.updateLight();
    };
    Particle.prototype.updateRectangle = function () {
        if (this.position.x + this.sizeWidth < 0) {
            this.position.x = windowWidth;
        }
        else if (this.position.x > windowWidth) {
            this.position.x = -20;
        }
        if (this.position.y + this.sizeHeight < 0) {
            this.position.y = windowHeight + 20;
        }
        this.aliveTime++;
        this.position.add(this.velocity);
    };
    Particle.prototype.updateLight = function () {
        this.distance = 125 + this.amplitude * sin(this.aliveTime / this.period);
        for (var y = 0; y < this.image.height; y++) {
            for (var x = 0; x < this.image.width; x++) {
                var distance = (sq(this.center - x) + sq(this.center - y)) / this.distance;
                var id = (x + y * this.image.width) * 4;
                this.image.pixels[id] = 80 / distance;
                this.image.pixels[id + 1] = 30 / distance;
                this.image.pixels[id + 2] = 10 / distance;
                this.image.pixels[id + 3] = 255 / distance;
            }
        }
        this.image.updatePixels();
    };
    Particle.prototype.displayParticle = function () {
        this.displayRectangle();
        this.displayLight();
    };
    Particle.prototype.displayRectangle = function () {
        var startColor = color(31, 31, 28);
        var endColor = color(231, 126, 60);
        for (var i = 0; i < this.sizeHeight; i += 2) {
            var c = lerpColor(startColor, endColor, i / this.sizeHeight);
            fill(c);
            strokeJoin(ROUND);
            rect(this.position.x, this.position.y + i, this.sizeWidth, 2);
        }
    };
    Particle.prototype.displayLight = function () {
        image(this.image, this.position.x + this.sizeWidth * 0.5, this.position.y + this.sizeHeight * 0.75);
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
        });
    };
    return ParticleSystem;
}());
var ps = new ParticleSystem();
var maxParticles = 15;
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
//# sourceMappingURL=build.js.map