<?php
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "mascotte";

    try{
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
        echo "Connection failed: " . $e->getMessage();
    }

    $conn = mysqli_connect($servername, $username, $password, $dbname);
    $query = "select * from mascottes";
    $mascottes = mysqli_query($conn, $query); 

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
<body>
    <section class="container">
        <!-- Left side, full mascotte-->
        <div class="mascotte-container">
            <a href="index.html"><i class="fa-solid fa-xmark"></i></a>
            <button id="captureButton">Télécharger</button>
            <div id="qrcode"></div>
            <div class="mascotte" id="screenMascotte">
                <div class="mascotte-body">
                    <img id="body" class="choice" src="" >
                    <img id="eyes" class="choice" src="" >
                    <img id="hat" class="choice" src="">
                    <img id="accessories" class="choice" src="">
                </div>
                <img id="background" class="choice" src="">
            </div>
        </div>

        <!-- Right side, choix mascottes-->
        <div class="grille-sec">
            
                <div class="grille">         
                <?php foreach($mascottes as $mascotte){  ?>
                    <div class="mascotte-gallery" id="<?= $mascotte['id'] ?>">
                        <img id="body" src="images/Formes/Gallery/<?= $mascotte['lien_corps'] ?>">
                        <img id="eyes" src="images/Emotions/Gallery/<?= $mascotte['lien_visage'] ?>" >
                        <img id="hat" src="images/Hat/Gallery/<?= $mascotte['lien_accessoire'] ?>" >
                        <img id="background" src="images/Background/<?= $mascotte['lien_background'] ?>" >
                        <img id="accessories" src="images/Accessoires/Gallery/<?= $mascotte['lien_sport'] ?>" >
                    </div>
                <?php } ?>
                </div>
            
        </div>
    </section>

    <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="js/gallery.js"></script>
</body>
</html>