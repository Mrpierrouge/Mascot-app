// Lorsque le document est chargé
document.addEventListener("DOMContentLoaded", function () {
  const maDiv = document.getElementById("screenMascotte");

  // Fonction pour capturer la div
  function captureDiv() {
    html2canvas(maDiv).then(function (canvas) {
      // Créer un lien pour télécharger l'image
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "mascotte.png";
      link.click();

      // Générer un QR code à partir de l'image
      const qrCanvas = document.createElement("canvas");
      const qrContext = qrCanvas.getContext("2d");
      qrCanvas.width = canvas.width;
      qrCanvas.height = canvas.height;
      qrContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    });
  }

  // Appeler la fonction de capture lorsque vous le souhaitez
  // Par exemple, en réponse à un clic sur un bouton
  document
    .getElementById("captureButton")
    .addEventListener("click", captureDiv);
});

// Affichage de la mascotte en plein écran
const background = document.getElementById("background");
const bigMascotte = document.querySelector(".mascotte-body");
const bigMascotteBody = bigMascotte.querySelector("#body");
const bigMascotteHat = bigMascotte.querySelector("#hat");
const bigMascotteEyes = bigMascotte.querySelector("#eyes");
const bigMascotteAccessories = bigMascotte.querySelector("#accessories");
const bigMascotteBackground = document.querySelector("#background");
const bigMascotteBtn = document.querySelector("#btnQRcode");
console.log(bigMascotteBackground);

// Sélection de toutes les mascottes dans la galerie
const mascotteGallery = document.querySelectorAll(".mascotte-gallery");

// Pour chaque mascotte dans la galerie
mascotteGallery.forEach((mascotte) => {
  // Ajout d'un écouteur d'événements sur le clic
  mascotte.addEventListener("click", () => {
    // Récupération des éléments de la mascotte cliquée
    const id = mascotte.getAttribute("id");
    const body = mascotte.querySelector("#body");
    const hat = mascotte.querySelector("#hat");
    const eyes = mascotte.querySelector("#eyes");
    const accessories = mascotte.querySelector("#accessories");
    const background = mascotte.querySelector("#background");
    
    // Mise à jour de la grande mascotte avec les éléments de la mascotte cliquée
    bigMascotteBody.src = body.src;
    bigMascotteEyes.src = eyes.src;
    bigMascotteHat.src = hat.src;
    bigMascotteAccessories.src = accessories.src;
    bigMascotteBackground.src = background.src;
    bigMascotteBtn.setAttribute("data-qr", id);
    
  });
});

// Sélection des boutons de fermeture et des popups
const btnClose = document.querySelectorAll(".closeQrcode");
const LesPopUps = document.querySelectorAll(".popUpQrcode");

// Pour chaque bouton de fermeture
btnClose.forEach((UnBtn) => {
    // Ajout d'un écouteur d'événements sur le clic
    UnBtn.addEventListener("click", function () {
        LesPopUps.forEach((popUp) => {
            popUp.style.display = "none";
        });
    });
});