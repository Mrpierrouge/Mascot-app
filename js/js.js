// Obtention des références vers les éléments de couleur, œil, chapeau, sport, image et partage
const color = document.getElementsByClassName("color")[0];
const eye = document.getElementsByClassName("eye")[0];
const hat = document.getElementsByClassName("hat")[0];
const sport = document.getElementsByClassName("sport")[0];
const picture = document.getElementsByClassName("picture")[0];
const share = document.getElementsByClassName("share")[0];

// Fonction pour mettre à jour l'opacité du logo
function updateOpacityLogo(targetElement) {
  // Tableau d'éléments de couleur, œil, chapeau, sport, image et partage
  const elements = [color, eye, hat, sport, picture, share];

  // Parcourir chaque élément
  elements.forEach((element) => {
    if (element === targetElement) {
      // Si l'élément correspond à celui cliqué, supprimer la classe d'opacité
      element.classList.remove("opacity");
    } else {
      // Sinon, ajouter la classe d'opacité
      element.classList.add("opacity");
    }
  });
}

// Ajouter des écouteurs d'événements pour chaque élément de couleur, œil, chapeau, sport, image et partage
color.addEventListener("click", function () {
  updateOpacityLogo(color);
});

eye.addEventListener("click", function () {
  updateOpacityLogo(eye);
});

hat.addEventListener("click", function () {
  updateOpacityLogo(hat);
});

sport.addEventListener("click", function () {
  updateOpacityLogo(sport);
});

picture.addEventListener("click", function () {
  updateOpacityLogo(picture);
});

share.addEventListener("click", function () {
  updateOpacityLogo(share);
});

// -----------------------------

// Obtention des références vers les éléments de défilement de couleur, œil, chapeau, sport, image et partage
const colorsScroll = document.getElementsByClassName("colors")[0];
const eyesScroll = document.getElementsByClassName("eyes")[0];
const hatsScroll = document.getElementsByClassName("hats")[0];
const sportsScroll = document.getElementsByClassName("sports")[0];
const picturesScroll = document.getElementsByClassName("pictures")[0];
const sharesScroll = document.getElementsByClassName("shares")[0];

// Obtention des références vers les identifiants de couleur, œil, chapeau, sport, image et partage
const colorsID = document.getElementById("colors");
const eyesID = document.getElementById("eyes");
const hatsID = document.getElementById("hats");
const sportsID = document.getElementById("sports");
const picturesID = document.getElementById("pictures");
const sharesID = document.getElementById("share");

// Obtention de la référence vers l'icône mobile
const mobileIcon = document.getElementsByClassName('.mobileIcon')[0];

// Fonction pour gérer le clic sur un élément de couleur, œil, chapeau, sport, image ou partage
function handleItemClick(target, targetID, targetScroll, color, classBorder) {
  // Tableau des éléments de couleur, œil, chapeau, sport, image et partage
  const elements = [colorsID, eyesID, hatsID, sportsID, picturesID, sharesID];
  
  // Tableau des éléments de défilement de couleur, œil, chapeau, sport, image et partage
  const scrolls = [
    colorsScroll,
    eyesScroll,
    hatsScroll,
    sportsScroll,
    picturesScroll,
    sharesScroll,
  ];

  // Parcourir chaque élément
  elements.forEach((element, index) => {
    if (element === targetID) {
      // Mettre à jour la couleur de fond, ajouter la classe d'animation et de pulsation
      element.style.backgroundColor = color;
      element.classList.add("pulse");
    } else {
      // Réinitialiser la couleur de fond et supprimer la classe d'animation et de pulsation
      element.style.backgroundColor = '#EEF1F4';
      element.classList.remove("pulse");
    }
  });

  // Parcourir chaque élément de défilement
  scrolls.forEach((scroll, index) => {
    if (scroll === targetScroll) {
      // Rendre l'élément de défilement visible et ajouter la classe de bordure
      scroll.classList.remove("hidden");
      scroll.classList.add(classBorder);
    } else {
      // Cacher l'élément de défilement et supprimer la classe de bordure
      scroll.classList.add("hidden");
      scroll.classList.remove(classBorder);
    }
  });
}

// Ajouter des écouteurs d'événements pour chaque élément de couleur, œil, chapeau, sport, image et partage
color.addEventListener("click", function () {
  handleItemClick(color, colorsID, colorsScroll, "#EC7373", "colors");
});

eye.addEventListener("click", function () {
  handleItemClick(eye, eyesID, eyesScroll, "#68BD89", "eyes");
});

hat.addEventListener("click", function () {
  handleItemClick(hat, hatsID, hatsScroll, "#79BDE0", "hats");
});

sport.addEventListener("click", function () {
  handleItemClick(sport, sportsID, sportsScroll, "#D8C059", "sports");
});

picture.addEventListener("click", function () {
  handleItemClick(picture, picturesID, picturesScroll, '#595959', "pictures");
});

share.addEventListener("click", function () {
  handleItemClick(share, sharesID, sharesScroll);
});

// -----------------------------
