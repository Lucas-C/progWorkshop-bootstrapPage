function estCeLeBonMdp (password) {
  return password === "ed";
}
function afficheResultat (resultatTrouve) {
  var resultDiv = document.getElementById('resultatCoffreFort');
  if (resultatTrouve) {
    resultDiv.innerHTML = '<div class="alert alert-success" role="alert">'
      + '  <h1 class="text-center">Bravo !</h1>'
      + '  <img src="../img/cowboy-beebop_ed_success.gif" class="img-thumbnail center-block">'
      + '</div>';
  } else {
    resultDiv.innerHTML = '<div class="alert alert-danger" role="alert">'
      + '  <h1 class="text-center">Code incorrect :(</h1>'
      + '  <img src="../img/cowboy-beebop_ed_fail.gif" class="img-thumbnail center-block">'
      + '</div>';
  }
}

