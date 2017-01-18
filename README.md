# ToDo

- tester backup-and-open-intro.bat

# Bilan de la séance râtée

- damn antivirus !!
- pas testé au préalable
- pas de plan B
- mal communiqué avec les jeunes sur place, en situtation problématique


# Déroulement de la séance

- préparer plugin NoScript / SafeScript pour démo

## Présentation générale

- Qui suis-je ?
- Et vous ? Vous connaissez quoi ?
- Ce qu'on va faire :
    * 4 petits challenges: vous ne pourrez pas tous les faire en 2h
    * combien de temps: ~2h
    * il y aura des PAUSES communes
- ATTENTION: ceci n'est pas un cours, mais un jeu ! Parfois je donnerais des explications, mais vous n'aurez pas besoin de tout savoir sur la programmation pour terminer les challenges.

## Présentation des outils

1- Explorateur Windows

2- Atom
Présentation de Atom : outil de pro. Conseil: CTRL+S
Gros avantage : la coloration syntaxique.
Fermer tous les onglets.
Expliquer l'intérêt de l'outil

3- Navigateur web, késako ?
Conseil: F5
Console de développeur: CTRL+MAJ+I avec Chrome, CTRL+MAJ+K avec Firefox

Tout est écrit, je vous laisse découvrir par vous même la page.
Essayer de trouver la solution avant de cliquer sur les indices !
Et n'hésitez pas si vous avez des questions. Il n'y a pas de question stupide !

Vous pouvez fouiller partout dans l'explorateur windows, ou ouvrir tous les fichiers que vous voulez dans Atom.

URL ? késako ?

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

Expliquer qu'on peut revenir en arrière dans Atom avec CTRL+Z
Expliquer aussi CTRL+S


## Challenge 2

Si "anatomy-of-an-html-tag.png" est légèrement tronqué sur les côtés, appuyer sur ALT.

(Quels formats d'images connaissez vous ? Quels formats permettent des images transparentes ?)

## Challenge 3

Débuts en Javascript

## Challenge 4

Canvas & 1ère boucle "for"

## Challenge 5

Formulaire, boucle, fonctions & conditionnelles

## Cool stuff to show off

- `document.body.contentEditable='true';`
- `alert("Salut !")`
- https://archive.org/web/


# Secrets

## Challenge 5 - ouvrirLeCoffre

Comment faire pour éviter de continuer les boucles une fois le mdp trouvé ? -> `break`

    npm install -g js-obfuscator
    jsobfuscate < secret_obfuscated_function.js

