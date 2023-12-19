// Sélectionne les éléments HTML nécessaires à partir de la classe ou de l'ID
const bigMascotte = document.querySelector('.mascotte-body');
const bigMascotteBody = bigMascotte.querySelector('#body-mascotte');
const bigMascotteHat = bigMascotte.querySelector('#hat-mascotte');
const bigMascotteEyes = bigMascotte.querySelector('#eyes-mascotte');
const bigMascotteAccessories = bigMascotte.querySelector('#accessories-mascotte');
const bigMascotteBackground = document.querySelector('#background-mascotte');

// Sélectionne les éléments HTML nécessaires à partir de la classe ou de l'ID
const formes = document.querySelectorAll('.forme-js');
const eyes = document.querySelectorAll('.emotions-js');
const hats = document.querySelectorAll('.accessoire-js');
const accessories = document.querySelectorAll('.sport-js');
const backgrounds = document.querySelectorAll('.background-js');

// Fonction pour formater une chaîne de caractères (src de l'image) et enlever les 9 derniers caractères (pour enlever le "-Zoom.png" à la fin du nom de l'image)
function formateSrc(src) {
    let srcString = new String(src);
    let arraySrc = Object.values(srcString);

    // Fonction pour formater une chaîne de caractères (src de l'image)
    for (let i = 0; i < 9; i++) {
        arraySrc.pop();
    }
    // Rejoint les caractères restants pour obtenir le chemin du fichier sans l'extension
    let srcStringFormated = arraySrc.join('');
    return srcStringFormated;
}

// Ajoute des écouteurs d'événements aux éléments de chaque catégorie pour changer l'image de la mascotte

formes.forEach(forme => {
    forme.addEventListener('click', () => {
        bigMascotteBody.src = formateSrc(forme.src) + '.png';
    })
});

eyes.forEach(eye => {
    eye.addEventListener('click', () => {
        bigMascotteEyes.src = formateSrc(eye.src) + '.png';
    })
});

hats.forEach(hat => {
    hat.addEventListener('click', () => {
        bigMascotteHat.src = formateSrc(hat.src) + '.png';
    })
});

accessories.forEach(accessory => {
    accessory.addEventListener('click', () => {
        bigMascotteAccessories.src = formateSrc(accessory.src) + '.png';
    })
});

backgrounds.forEach(background => {
    background.addEventListener('click', () => {
        bigMascotteBackground.src = background.src;
    })
}  );


// Change the color of the mascotte
