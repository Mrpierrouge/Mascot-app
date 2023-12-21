<?php

require("connec.php");


$requete = $database->prepare("SELECT * FROM mascottes ORDER BY id DESC");
$requete->execute();
$mascottes = $requete->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galerie</title>
    <link rel="stylesheet" href="css/gallery.css">
    <script src="https://kit.fontawesome.com/d46d8a5065.js" crossorigin="anonymous"></script>
</head>

<body onkeydown="activite_detectee = true;" onmousemove="activite_detectee = true;" onscroll="activite_detectee = true;">
    <section class="container">

        <!-- Left side, full mascotte-->
        <div class="mascotte-container">
            <a href="index.html"><i class="fa-solid fa-xmark"></i></a>
            <button id="captureButton">Télécharger</button>
            <button id="btnQRcode" data-qr="<?=$mascottes[0]['id'] ?>">QRCODE</button>
            <div class="mascotte" id="screenMascotte">
                <div class="mascotte-body">
                    <img id="body" class="choice" src="images/Formes/Gallery/<?=$mascottes[0]['lien_corps'] ?>">
                    <img id="eyes" class="choice" src="images/Emotions/Gallery/<?= $mascottes[0]['lien_visage'] ?>">
                    <img id="hat" class="choice" src="images/Hat/Gallery/<?= $mascottes[0]['lien_accessoire'] ?>">
                    <img id="accessories" class="choice" src="images/Accessoires/Gallery/<?= $mascottes[0]['lien_sport'] ?>">
                </div>
                <img id="background" class="choice" src="images/Background/<?= $mascottes[0]['lien_background'] ?>">
            </div>
        </div>

        <!-- Right side, choix mascottes-->
        <div class="grille-sec" onscroll="activite_detectee = true;">

            <div class="grille" onscroll="activite_detectee = true;">
                <?php foreach ($mascottes as $mascotte) { ?>
                    <div class="mascotte-gallery" id="<?= $mascotte['id'] ?>">
                        <img id="body" src="images/Formes/Gallery/<?= $mascotte['lien_corps'] ?>">
                        <img id="eyes" src="images/Emotions/Gallery/<?= $mascotte['lien_visage'] ?>">
                        <img id="hat" src="images/Hat/Gallery/<?= $mascotte['lien_accessoire'] ?>">
                        <img id="background" src="images/Background/<?= $mascotte['lien_background'] ?>">
                        <img id="accessories" src="images/Accessoires/Gallery/<?= $mascotte['lien_sport'] ?>">
                    </div>


                    <div class="popUpQrcode mascotte<?= $mascotte['id']  ?>">
                        <div class="contentQRcode">
                            <p>Voici votre qrcode</p>
                            <img src="https://api.qrserver.com/v1/create-qr-code/?data=http://localhost/BAP_2023/Mascotte/qrcode.php?id=<?= $mascotte['id'] ?>/&size=150x150"
                                alt="" title="" />
                            <button class="closeQrcode">Fermer</button>
                        </div>
                    </div>

                    <script>
                        document.getElementById('btnQRcode').addEventListener('click', function() {
                            const id = this.getAttribute('data-qr');
                            const popUp = document.querySelector('.mascotte' + id);
                            popUp.style.display = 'flex';
                        });

                        document.querySelector('.closeQrcode').addEventListener('click', () => {
                            document.querySelector('.popUpQrcode').style.display = 'none';
                            document.querySelector('.mascotte<?=$mascotte['id'] ?>').style.display = 'none';
                        });
                    </script>
                <?php } ?>
            </div>

        </div>
    </section>

    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="js/gallery.js"></script>
    <script src="js/innactif.js"></script>
</body>

</html>