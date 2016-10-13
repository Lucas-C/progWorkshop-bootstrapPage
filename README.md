# ToDo

- RevealJS load Markdown without HTTP server

	  <script type="text/markdown" id="markdown-src" src="index.md"></script>

# Bilan de la séance

- damn antivirus !!
- pas testé au préalable
- pas de plan B
- mal communiqué avec les jeunes sur place, en situtation problématique


# Déroulement de la séance

- préparer plugin NoScript / SafeScript pour démo

## Présentation générale

- Qui suis-je ?
- Et vous ? Vous connaissez quoi ?
- Ce qu'on va faire : il y aura des PAUSES communes
- ATTENTION: ceci n'est pas un cours, mais un jeu ! Parfois je donnerais des explications, mais vous n'aurez pas besoin de tout savoir sur la programmation pour terminer les challenges.

## Présentation des outils

**Q:** Navigateur web, késako ?
Conseil: F5
Console de développeur: CTRL+MAJ+I avec Chrome, CTRL+MAJ+K avec Firefox

Présentation de Atom : outil de pro. Conseil: CTRL+S
Gros avantage : la coloration syntaxique.
Fermer le panneau de droite.

**Q:** Exemples d'extensions de fichier ?
... -> `.bat` = "Batch", vieux language de script pour Windows

	  run-server.bat

-> fenêtre demande authorisation: OK


## Intro

**Q:** A quoi correspond le `website` de l'URL ? Et `localhost` ?
-> expliquer que les URLs décrivent des chemins d'ordinateur


## Challenge 1

Expliquer que le navigateur va automatiquement chercher un fichier `index.html` (visible dans l'onglet "Network" de la console).
En effet, toute la navigation web repose sur l'échange de fichiers ! Le plus souvent, de fichiers HTML.

**Fin du challenge:** présenter rapidement le rôle les balises HTML, et les attributs


## Challenge 2

(Quels formats d'images connaissez vous ? Quels formats permettent des images transparentes ?)

## Challenge 3

Débuts en Javascript

## Challenge 4

Canvas & 1ère boucle "for"

## Challenge 5

Formulaire, boucle, fonctions & conditionnelles


# Secrets

## Challenge 5 - ouvrirLeCoffre

Fonction obscurcie :

		function ouvrirLeCoffre () {
		  var password = document.getElementById('motDePasse').value;
		  var resultDiv = document.getElementById('resultatCoffreFort');
		  if (password === "ed5") {
		    resultDiv.innerHTML = '<div class="alert alert-success" role="alert">'
		      + '  <img src="/img/cowboy-beebop_ed_success.gif" class="img-thumbnail center-block">'
		      + '  <h1 class="text-center">Bravo !</h1>'
		      + '</div>';
		  } else {
		    resultDiv.innerHTML = '<div class="alert alert-danger" role="alert">'
		      + '  <img src="/img/cowboy-beebop_ed_fail.gif" class="img-thumbnail center-block">'
		      + '  <h1 class="text-center">Code incorrect :(</h1>'
		      + '</div>';
		  }
		}
