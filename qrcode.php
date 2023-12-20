<?php

require("connec.php");
$id = $_GET['id'];
        echo($id);


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
    <link rel="stylesheet" href="css/gallery.css">
    <script src="https://kit.fontawesome.com/d46d8a5065.js" crossorigin="anonymous"></script>
</head>
<body>
    





    <section class="container">
        <!-- Left side, full mascotte-->
        <div class="mascotte-container">
            <a href="index.html"><i class="fa-solid fa-xmark"></i></a>
            <button id="captureButton">Télécharger</button>
            <div class="mascotte" id="screenMascotte">
                <div class="mascotte-body">
                    <img id="body" class="choice" src="images/Formes/Gallery/<?=$mascotte[0]["lien_corps"]?>" >
                    <img id="eyes" class="choice" src="images/Emotions/Gallery/<?=$mascotte[0]["lien_visage"]?>" >
                    <img id="hat" class="choice" src="images/Hat/Gallery/<?=$mascotte[0]["lien_accessoire"]?>">
                    <img id="accessories" class="choice" src="images/Accessoires/Gallery/<?=$mascotte[0]["lien_sport"]?>">
                </div>
                <img id="background" class="choice" src="images/Background/Gallery/<?=$mascotte[0]["lien_sport"]?>">
            </div>
        </div>

       
    </section>

    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="js/gallery.js"></script>
</body>
</html>