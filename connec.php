<?php
    try{
        $database = new PDO("mysql:host=localhost;dbname=mascotte", "root","");
    } catch(Exception $e){
        die("Erreur :" . $e->getMessage());
    }
    
?>