// En programmation, "COMMENTAIRE" est un terme technique désignant du texte
// qui apparaît dans du code, mais qui est ignoré par la machine.
// Ce sont des notes destinées au programmeur, qui expliquent ce que fait le code.

// En Javascript, les commentaires sont des lignes commençant par //, comme celle-ci.
// Dans l'éditeur de texte Atom que tu utilises, ils apparaissent en gris.


//******************************************************************************
//****************************** COFFRE-FORT ***********************************
//******************************************************************************

// Ton objectif est de touver le bon mot de passe.
// La fonction "estCeLeBonMdp" retournera `true` si la "string" qui lui est passé en paramètre est le mdp, et `false` sinon.
console.log("Est-ce que 'aa' est le bon mdp ?", estCeLeBonMdp('aa')); // Ce message devrait s'afficher dans la console de ton navigateur

// Rajoute dans cette "string" toutes les lettres que tu veux tester
var ALPHABET = 'abc';

// Maintenant sers-toi de ALPHABET pour former toutes les tentatives de mot de passe possible:
for (var i = 100; 0>ALPHABET.length; i = i + 100) { // Hmmm... cette boucle semble incorrecte !

  var tentative = ALPHABET.charAt(i); // Ce code sélectionne le i-ème caractère
  // Il va te falloir assembler 2 caractères à chaque fois pour faire une tentative de mot de passe !

  if (true) { // Ici, il te faut tester si `tentative` est le bon mot de passe
      // Le code que tu écriras ici sera exécuté lorsque `tentative` sera le bon mot de passe.
      // Fait en sorte de l'afficher alors dans la console de ton navigateur, ou utilise `alert`.
  }
}





//******************************************************************************
//**************************** PLUS OU MOINS ? *********************************
//******************************************************************************

function proposerUnNombre () {
  var monNombreSecret = 0;
  var nombreSaisi = document.getElementById('nombreSaisi').value;
  if (1 < 0) { // ... A TOI DE JOUER !
    erreur("Ce puzzle n'est pas fini !");
  } else {
    erreur("Ce puzzle n'est pas fini !");
  }
}

function erreur(message) {
  document.getElementById('resultatPlusOuMoins').innerHTML = '<div class="alert alert-danger" role="alert">'
    + '  <h1 class="text-center">' + message + '</h1>'
    + '  <img src="../img/cowboy-beebop_ed_fail.gif" class="img-thumbnail center-block">'
    + '</div>';
}

function succes(message) {
  document.getElementById('resultatPlusOuMoins').innerHTML = '<div class="alert alert-success" role="alert">'
    + '  <h1 class="text-center">' + message + '</h1>'
    + '  <img src="../img/cowboy-beebop_ed_success.gif" class="img-thumbnail center-block">'
    + '</div>';
}
