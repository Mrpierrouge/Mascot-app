// On déclare et initialise les variables utilisée
var activite_detectee = false;
var intervalle = 100;
var temps_inactivite = 0;
var inactivite_persistante = true;


// On crée la fonction qui teste toutes les x secondes l'activité du visiteur 
function testerActivite() {
  // On teste la variable activite_detectee
     // Si une activité a été détectée On réinitialise les variables nécessaires
     if(activite_detectee) {
       activite_detectee = false;
       temps_inactivite = 0;
       inactivite_persistante = false;
     }
     // Si aucune activité n'a été détectée on et que l'innactivité est persistante, on met à jour la valeur du temps d'inactivité
     else {

       // Si l'inactivite est persistante [on met à jour temps_inactivite]
       if(inactivite_persistante) {
         temps_inactivite += intervalle;
         // Si le temps d'inactivite dépasse les 30 secondes, je redirige vers index.html
         if(temps_inactivite >= 30000)
           window.location.href="index.html";
       }
       // Si l'inactivite est nouvelle, on passe inactivite_persistante a true
       else
         inactivite_persistante = true;
     }
  // On relance la fonction 
  setTimeout('testerActivite();', intervalle);
}

// On lance la fonction testerActivite() pour la première fois, au chargement de la page
setTimeout('testerActivite();', intervalle);