<?php
    try{
        $database = new PDO("mysql:host=localhost;dbname=mascotte", "root","root");
    } catch(Exception $e){
        die("Erreur :" . $e->getMessage());
    }
?>