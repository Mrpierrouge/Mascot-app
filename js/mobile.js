// Obtenir des références vers les éléments HTML
const mobileForme = document.getElementById("mobileForme");
const mobileEmotion = document.getElementById("mobileEmotion");
const mobileAccessoire = document.getElementById("mobileAccessoire");
const mobileSport = document.getElementById("mobileSport");
const mobileFond = document.getElementById("mobileFond");
const mobilePartager = document.getElementById("mobilePartager");

// Fonction pour mettre à jour l'opacité des éléments
function updateOpacity(targetElement) {
  // Tableau d'éléments pour mettre à jour l'opacité
  const elements = [
    mobileForme,
    mobileEmotion,
    mobileAccessoire,
    mobileSport,
    mobileFond,
    mobilePartager,
  ];

  // Parcourir chaque élément
  elements.forEach((element) => {
    if (element === targetElement) {
      // Si l'élément correspond à celui cliqué, supprimer la classe d'opacité
      element.classList.remove("opacity");
      // mobileIcon.style.backgroundColor = color;
    } else {
      // Sinon, ajouter la classe d'opacité
      element.classList.add("opacity");
      // mobileIcon.style.backgroundColor = "#EEF1F4";
    }
  });
}

// Ajouter un écouteur d'événement pour chaque élément mobile
mobileEmotion.addEventListener("click", function () {
  updateOpacity(mobileEmotion);
});

mobileAccessoire.addEventListener("click", function () {
  updateOpacity(mobileAccessoire);
});

mobileSport.addEventListener("click", function () {
  updateOpacity(mobileSport);
});

mobileFond.addEventListener("click", function () {
  updateOpacity(mobileFond);
});

mobilePartager.addEventListener("click", function () {
  updateOpacity(mobilePartager);
});

mobileForme.addEventListener("click", function () {
  updateOpacity(mobileForme);
});

// -----------------------------

// Obtention des références vers les éléments de défilement

// Fonction pour gérer le clic sur un élément
function handleItemClick(target, targetID, targetScroll) {
  // Tableau des éléments de défilement
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
      // Si l'élément correspond à celui cliqué, ajouter la classe d'animation
      element.classList.add("animateIcon");
    } else {
      // Sinon, supprimer la classe d'animation
      element.classList.remove("animateIcon");
    }
  });

  // Parcourir chaque élément de défilement
  scrolls.forEach((scroll, index) => {
    if (scroll === targetScroll) {
      // Si l'élément de défilement correspond à celui cliqué, le rendre visible
      scroll.classList.remove("hidden");
    } else {
      // Sinon, le cacher
      scroll.classList.add("hidden");
    }
  });
}

// -----------------------------

// Fonction pour mettre à jour les classes de l'icône mobile
function updateMobileIconClasses(colorClass) {
  const mobileIcon = document.getElementsByClassName('mobileIcon')[0];
  const classesToRemove = ["mobileIconGreen", "mobileIconPink", "mobileIconOrange", "mobileIconGrey", "mobileIconBlue", "mobileIconNeutral"];

  // Parcourir chaque classe à supprimer
  classesToRemove.forEach((classToRemove) => {
    // Supprimer la classe
    mobileIcon.classList.remove(classToRemove);
  });

  // Ajouter la classe spécifiée
  mobileIcon.classList.add(colorClass);
}

// Ajouter un écouteur d'événement pour chaque élément mobile
mobileForme.addEventListener("click", function () {
  handleItemClick(mobileForme, colorsID, colorsScroll);
  updateMobileIconClasses("mobileIconBlue");
});

mobileEmotion.addEventListener("click", function () {
  handleItemClick(mobileEmotion, eyesID, eyesScroll);
  updateMobileIconClasses("mobileIconGrey");
});

mobileAccessoire.addEventListener("click", function () {
  handleItemClick(mobileAccessoire, hatsID, hatsScroll);
  updateMobileIconClasses("mobileIconPink");
});

mobileSport.addEventListener("click", function () {
  handleItemClick(mobileSport, sportsID, sportsScroll);
  updateMobileIconClasses("mobileIconOrange");
});

mobileFond.addEventListener("click", function () {
  handleItemClick(picture, picturesID, picturesScroll);
  updateMobileIconClasses("mobileIconGreen");
});

mobilePartager.addEventListener("click", function () {
  handleItemClick(mobilePartager, sharesID, sharesScroll);
  updateMobileIconClasses("mobileIconNeutral");
});

// -----------------------------

// Sélection de tous les éléments mobiles
const mobileIcons = document.querySelectorAll('.mobile');

// Ajouter un écouteur d'événement à chaque élément mobile
mobileIcons.forEach((icon) => {
  icon.addEventListener('click', function () {
    // Obtenez l'ID correspondant à l'élément cliqué
    const targetID = this.id;

    // Sélectionnez l'élément cible en utilisant l'ID
    const targetElement = document.getElementById(targetID);

    // Faites défiler vers l'élément cible avec un effet de défilement en douceur
    targetElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  });
});
