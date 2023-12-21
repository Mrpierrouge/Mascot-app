<?php

require 'connec.php';
$corps = $_GET['corps'];
$hat = $_GET['hat'];
$visage = $_GET['visage'];
$sport = $_GET['sport'];
$background = $_GET['background'];

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

$insert = $database->prepare("INSERT INTO mascottes (lien_corps, lien_visage, lien_accessoire, lien_sport, lien_background) VALUES ('$corps', '$visage', '$hat', '$sport', '$background')");
$insert->execute();

header("Location: gallery.php");