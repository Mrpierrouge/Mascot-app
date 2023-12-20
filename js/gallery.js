    document.addEventListener('DOMContentLoaded', function () {
        const maDiv = document.getElementById('screenMascotte');

        // Fonction pour capturer la div
        function captureDiv() {
            html2canvas(maDiv).then(function (canvas) {
                // Créer un lien pour télécharger l'image
                const link = document.createElement('a');
                link.href = canvas.toDataURL();
                link.download = 'mascotte.png';
                link.click();

                // Générer un QR code à partir de l'image
                const qrCanvas = document.createElement('canvas');
                const qrContext = qrCanvas.getContext('2d');
                qrCanvas.width = canvas.width;
                qrCanvas.height = canvas.height;
                qrContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);

                
            });
        }

        // Appeler la fonction de capture lorsque vous le souhaitez
        // Par exemple, en réponse à un clic sur un bouton
        document.getElementById('captureButton').addEventListener('click', captureDiv);
    });


    // Affichage de la mascotte en plein écran 
    const background = document.getElementById('background');
    const bigMascotte = document.querySelector('.mascotte-body');
    const bigMascotteBody = bigMascotte.querySelector('#body');
    const bigMascotteHat = bigMascotte.querySelector('#hat');
    const bigMascotteEyes = bigMascotte.querySelector('#eyes');
    const bigMascotteAccessories = bigMascotte.querySelector('#accessories');
    const bigMascotteBackground = document.querySelector('#background');
    console.log(bigMascotteBackground);
    const mascotteGallery = document.querySelectorAll('.mascotte-gallery');

    console.log(mascotteGallery);
    mascotteGallery.forEach(mascotte => {
        mascotte.addEventListener('click', () => {
            const body = mascotte.querySelector('#body');
            const hat = mascotte.querySelector('#hat');
            const eyes = mascotte.querySelector('#eyes');
            const accessories = mascotte.querySelector('#accessories');
            const background = mascotte.querySelector('#background');
            
            bigMascotteBody.src = body.src;
            bigMascotteHat.src = hat.src;
            bigMascotteEyes.src = eyes.src;
            bigMascotteBackground.src = background.src;
            
        })
    });


  