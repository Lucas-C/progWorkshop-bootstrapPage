// En programmation, "COMMENTAIRE" est un terme technique désignant du texte
// qui apparaît dans du code, mais qui est ignoré par la machine.
// Ce sont des notes destinées au programmeur, qui expliquent ce que fait le code.

// En Javascript, les commentaires sont des lignes commençant par //, comme celle-ci.
// Dans l'éditeur de texte Atom que tu utilises, ils apparaissent en gris.


//******************************************************************************
//****************************** COFFRE-FORT ***********************************
//******************************************************************************

var motDePasse = document.getElementById('motDePasse');
//motDePasse.value = '123';

var formulaireCoffreFort = document.getElementById('formulaireCoffreFort');
//formulaireCoffreFort.submit();

//for ... A TOI DE JOUER !

/* Pour sortit d'une boucle "for", utilise le code suivant: */
if (document.getElementById('resultatCoffreFort').childNodes[0].classList[1] === 'alert-success') {
  break;
}



//******************************************************************************
//**************************** PLUS OU MOINS ? *********************************
//******************************************************************************

function proposerUnNombre () {
  var monNombreSecret = 0;
  var nombreSaisi = document.getElementById('nombreSaisi').value;
  //if ... A TOI DE JOUER !
  erreur("Ce puzzle n'est pas fini !");
}

function erreur(message) {
  document.getElementById('resultatPlusOuMoins').innerHTML = '<div class="alert alert-danger" role="alert">'
    + '  <img src="img/cowboy-beebop_ed_fail.gif" class="img-thumbnail center-block">'
    + '  <h1 class="text-center">' + message + '</h1>'
    + '</div>';
}

function succes(message) {
  document.getElementById('resultatPlusOuMoins').innerHTML = '<div class="alert alert-success" role="alert">'
    + '  <img src="img/cowboy-beebop_ed_success.gif" class="img-thumbnail center-block">'
    + '  <h1 class="text-center">' + message + '</h1>'
    + '</div>';
}
