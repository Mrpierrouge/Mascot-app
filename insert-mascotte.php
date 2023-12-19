<?php

require 'connec.php';

$corps = $_GET['corps'];
$hat = $_GET['hat'];
$visage = $_GET['visage'];
$sport = $_GET['sport'];
$background = $_GET['background'];

$insert = $database->prepare("INSERT INTO mascottes (lien_corps, lien_visage, lien_accessoire, lien_sport, lien_background) VALUES ('$corps', '$visage', '$hat', '$sport', '$background')");
$insert->execute();

header("Location: lien_gallerie.php");