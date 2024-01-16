<?php

require("connec.php");

//requête pour obtenir tous les liens des mascottes envoyés dans la bdd
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
            <button class="accueilQrBtn accueil"><a href="index.html" class="linkAccueil">ACCUEIL</a></button>
            <button id="captureButton">Télécharger</button>
            <button id="btnQRcode" class="accueilQrBtn" data-qr="<?=$mascottes[0]['id'] ?>">QRCODE</button>
            <div class="mascotte" id="screenMascotte">
                <div class="mascotte-body">
                    <img id="body" class="choice descend" src="images/Formes/Gallery/<?=$mascottes[0]['lien_corps'] ?>">
                    <img id="eyes" class="choice descend" src="images/Emotions/Gallery/<?= $mascottes[0]['lien_visage'] ?>">
                    <img id="hat" class="choice descend" src="images/Hat/Gallery/<?= $mascottes[0]['lien_accessoire'] ?>">
                    <img id="accessories" class="choice descend" src="images/Accessoires/Gallery/<?= $mascottes[0]['lien_sport'] ?>">
                </div>
                <img id="background" class="choice" src="images/Background/<?= $mascottes[0]['lien_background'] ?>">
            </div>
        </div>

        <!-- Right side, choix de toutes les mascottes qui ont été créées -->
        <div class="grille-sec" onscroll="activite_detectee = true;">

            <div class="grille" onscroll="activite_detectee = true;">
            <!-- on met les liens des assets des mascottes pour les afficher -->
                <?php foreach ($mascottes as $mascotte) { ?>
                    <div class="mascotte-gallery" id="<?= $mascotte['id'] ?>">
                        <img class="descend" id="body" src="images/Formes/Gallery/<?= $mascotte['lien_corps'] ?>">
                        <img class="descend"id="eyes" src="images/Emotions/Gallery/<?= $mascotte['lien_visage'] ?>">
                        <img class="descend"id="hat" src="images/Hat/Gallery/<?= $mascotte['lien_accessoire'] ?>">
                        <img id="background" src="images/Background/<?= $mascotte['lien_background'] ?>">
                        <img class="descend"id="accessories" src="images/Accessoires/Gallery/<?= $mascotte['lien_sport'] ?>">
                    </div>

                    <!-- Pop up QRcode -->
                    <div class="popUpQrcode mascotte<?= $mascotte['id']  ?>">
                        <div class="contentQRcode">
                            <a href="http://phpmyadmin.test/php/mascotte/qrcode.php?id=<?= $mascotte['id'] ?>">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?data=http://localhost/BAP_anim/Mascotte/qrcode.php?id=<?= $mascotte['id'] ?>/&size=150x150"
                                alt="" title="" /></a>
                            <button class="closeQrcode">Fermer</button>
                        </div>
                    </div>

                    <script>
                        // On récupère l'id de la mascotte pour afficher le bon QRcode
                        document.getElementById('btnQRcode').addEventListener('click', function() {
                            const id = this.getAttribute('data-qr');
                            const popUp = document.querySelector('.mascotte' + id);
                            popUp.style.display = 'flex';
                        });

                        // On ferme le QRcode
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