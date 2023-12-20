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


// On click for the selected mascotte
const boxMascotteFormes = document.querySelectorAll('.colors .box');
const boxMascotteEyes = document.querySelectorAll('.eyes .box');
const boxMascotteHats = document.querySelectorAll('.hats .box');
const boxMascotteAccessories = document.querySelectorAll('.sports .box');
const boxMascotteBackgrounds = document.querySelectorAll('.pictures .box');

boxMascotteFormes.forEach(boxForme => {
    boxForme.addEventListener('click', () => {
        removeBoxBorder(boxMascotteFormes);
        boxForme.classList.add('box-selected');
    })
});

boxMascotteHats.forEach(boxHat => {
    boxHat.addEventListener('click', () => {
        removeBoxBorder(boxMascotteHats);
        boxHat.classList.add('box-selected');
    })
});

boxMascotteAccessories.forEach(boxAccessory => {
    boxAccessory.addEventListener('click', () => {
        removeBoxBorder(boxMascotteAccessories);
        boxAccessory.classList.add('box-selected');
    })
});

boxMascotteBackgrounds.forEach(boxBackground => {
    boxBackground.addEventListener('click', () => {
        removeBoxBorder(boxMascotteBackgrounds);
        boxBackground.classList.add('box-selected');
    })
});

boxMascotteEyes.forEach(boxEye => {
    boxEye.addEventListener('click', () => {
        removeBoxBorder(boxMascotteEyes);
        boxEye.classList.add('box-selected');
    })
});

function removeBoxBorder(boxSelected) {
    boxSelected.forEach(box => {
        box.classList.remove('box-selected');
    })
}

// Change color of the mascot
const colorsBody = document.querySelectorAll('.colors .box');
const redBody = document.querySelectorAll('#box-red');
const yellowBody = document.querySelectorAll('#box-yellow');
const blueBody = document.querySelectorAll('#box-blue');
const greenBody = document.querySelectorAll('#box-green');
const blackBody = document.querySelectorAll('#box-black');

const colorsButton = document.querySelectorAll('.roundColors');
console.log(greenBody);

colorsButton.forEach(color => {
    color.addEventListener('click', () => {
        colorsBody.forEach(color => {
            color.classList.add('hidden');
            console.log(color)
        })
        if (color.id === "red") {
            redBody.forEach(color => {
                color.classList.remove('hidden');
            })
        } else if (color.id === "blue") {
            blueBody.forEach(color => {
                color.classList.remove('hidden');
            })
        } else if (color.id === "green") {
            greenBody.forEach(color => {
                color.classList.remove('hidden');
            })
        } else if (color.id === "yellow") {
            yellowBody.forEach(color => {
                color.classList.remove('hidden');
            })
        } else if (color.id === "black") {
            blackBody.classList.remove('hidden');
        }
    })
});


// scrolls.forEach((scroll) => {
//     if (scroll === targetScroll) {
//       // Rendre l'élément de défilement visible et ajouter la classe de bordure
//       scroll.classList.remove("hidden");
//       scroll.classList.add(classBorder);
//     } else {
//       // Cacher l'élément de défilement et supprimer la classe de bordure
//       scroll.classList.add("hidden");
//       scroll.classList.remove(classBorder);
//     }
//   });