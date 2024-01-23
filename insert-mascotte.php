<?php

require 'connec.php';
//On récupère les liens des assets de la mascotte
$corps = $_GET['corps'];
$hat = $_GET['hat'];
$visage = $_GET['visage'];
$sport = $_GET['sport'];
$background = $_GET['background'];

//Si l'utilisateur n'a rien cliqué sur un choix, on met une image par défaut
if ($corps == "") {
    $corps = "Formes1-Zoom.png	";
} 
if ($hat == "") {
    $hat = "Ha-zoom.png	";
}
if ($visage == "") {
    $visage = "Emotions1-Zoom.png";
}
if ($sport == "") {
    $sport = "Accessoire-zoom.png";
}
if ($background == "") {
    $background = "Background7.png";
}

//On insère les liens des assets dans la base de données dans la table mascottes
$insert = $database->prepare("INSERT INTO mascottes (lien_corps, lien_visage, lien_accessoire, lien_sport, lien_background) VALUES ('$corps', '$visage', '$hat', '$sport', '$background')");
$insert->execute();

//On redirige vers la page gallery.php
header("Location: gallery.php");