<?php
    try{
        $database = new PDO("mysql:host=localhost;dbname=mascotte3", "root","");
    } catch(Exception $e){
        die("Erreur :" . $e->getMessage());
    }
    
?>