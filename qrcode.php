<?php

require("connec.php");
$id = $_GET['id'];


$requete = $database->prepare("SELECT * FROM mascottes WHERE id = $id");
$requete->execute();
$mascotte = $requete->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QRCODE</title>
    <link rel="stylesheet" href="css/qr-code.css">
    <script src="https://kit.fontawesome.com/d46d8a5065.js" crossorigin="anonymous"></script>
</head>

<body>
    <section class="container">

        <a href="index.html"><i class="fa-solid fa-xmark"></i></a>
        <button id="captureButton">Télécharger</button>
        <div class="mascotte" id="screenMascotte">
            <img id="body" class="choice descend" src="images/Formes/Gallery/<?= $mascotte[0]["lien_corps"] ?>">
            <img id="eyes" class="choice descend" src="images/Emotions/Gallery/<?= $mascotte[0]["lien_visage"] ?>">
            <img id="hat" class="choice descend" src="images/Hat/Gallery/<?= $mascotte[0]["lien_accessoire"] ?>">
            <img id="accessories" class="choice descend" src="images/Accessoires/Gallery/<?= $mascotte[0]["lien_sport"] ?>">
            <img id="background" class="choice" src="images/Background/<?= $mascotte[0]["lien_background"] ?>">

        </div>



    </section>

    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="js/gallery.js"></script>
</body>

</html>