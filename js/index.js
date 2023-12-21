// Sélection du canvas HTML et définition de son contexte

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// Définition de la largeur et de la hauteur du canvas pour qu'il occupe toute la fenêtre
canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Fonction pour déterminer le nombre de particules en fonction de la taille du canvas
function getParticlesNumber() {
  if (canvas.width < 1000 || canvas.height < 800) {
    return 6
  } else if (canvas.width < 1280 || canvas.height < 800) {
    return 8;
  }
  return 13;
}

// Fonction pour déterminer le rayon des particules en fonction de la taille du canvas
function getParticlesRadius(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
// Définition du nombre de particules
let particleNumbers = getParticlesNumber();

// Objet pour suivre la position de la souris
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

// Tableau de couleurs pour les particules
const colors = ["#FCB030", "#090909", "#009D4B", "#E72845", "#15BEFF"];

// Fonction pour générer un nombre aléatoire dans une plage donnée
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fonction pour choisir une couleur aléatoire
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Fonction pour calculer la distance entre deux points
function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Écouteurs d'événements pour suivre les mouvements de la souris et redimensionner le canvas
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  particleNumbers = getParticlesNumber();

  init();
});

/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */


// Fonction pour gérer les collisions entre particules
function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding particles
    const angle = -Math.atan2(
      otherParticle.y - particle.y,
      otherParticle.x - particle.x
    );

    // Store mass in var for better readability in collision equation
    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    // Velocity before equation
    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    // Velocity after 1d collision equation
    const v1 = {
      x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
      y: u1.y
    };
    const v2 = {
      x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
      y: u2.y
    };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}

// Classe pour créer des particules avec des propriétés et des méthodes spécifiques
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: Math.random() - 0.5 * 3,
      y: Math.random() - 0.5 * 3
    };
    this.radius = radius;
    this.color = color;
    this.mass = 1;
    this.opacity = 1;
    this.image = this.getImage();
  }

  getImage() {
    if (this.color === "#FCB030") {
        return document.getElementById("image3");
    } else if (this.color === "#090909") {
        return document.getElementById("image1");
    } else if (this.color === "#009D4B") {
        return document.getElementById("image2");
    } else if (this.color === "#E72845") {
        return document.getElementById("image5");
    } else if (this.color === "#15BEFF") {
        return document.getElementById("image4");
    }
   }

  update = (particles) => {
    this.draw();

    for (let i = 0; i < particles.length; i++) {
      if (this === particles[i]) continue;

      if (
        distance(this.x, this.y, particles[i].x, particles[i].y) -
          this.radius * 2 <
        0
      ) {
        resolveCollision(this, particles[i]);
      }
    }

    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
      this.velocity.y = -this.velocity.y;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.save();
    c.globalAlpha = this.opacity;
    c.fillStyle = this.color;
    c.fill();
    c.restore();
    c.drawImage(this.image, this.x*0.95, this.y*0.92, this.radius*1, this.radius*1);
    c.strokeStyle = this.color;
    c.closePath();
  }
}



// Initialisation des particules
let particles = [];
function init() {
  particles = [];

  for (let i = 0; i < particleNumbers; i++) {
    let radius = 0;
    if (canvas.width < 760 && canvas.height < 760) {
      radius = getParticlesRadius(50, 70);
      console.log(radius);
    } else if (canvas.width < 1000 && canvas.height < 1000) {
      radius = getParticlesRadius(60, 90);
      console.log(radius);
    } else {
      radius = getParticlesRadius(80, 120);
      console.log(radius)

    }
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);
    const color = randomColor(colors);

    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 <= 0) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }

    particles.push(new Particle(x, y, radius, color));
  }
}

// Boucle d'animation
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update(particles);
  });
}

init();
animate();

