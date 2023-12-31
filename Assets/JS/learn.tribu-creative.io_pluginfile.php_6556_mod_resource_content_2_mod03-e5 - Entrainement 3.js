// -----------------------------------
console.log(
  "1/ Implémentez une fonction qui transforme un texte en camelCase."
);
function transformTextToCamelCase(texte) {
  let words = texte.split(" ");
  // console.log(words)
  let camelCase = words[0].toLowerCase();
  // console.log(camelCase)

  for (let i = 1; i < words.length; i++) {
    camelCase += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return camelCase;
}

console.log(transformTextToCamelCase("ceci est un texte"));

// -----------------------------------
console.log(
  "2/ Implémentez une fonction qui retroune le plus grand mot d'un texte."
);
const words = "quel est le plus grand mot dans cette longue phrase ?";
function getBiggestWord(texte, display) {
  let words = texte.split(" ");
  let biggest = "";
  for (let i of words) {
    if (i.length > biggest.length) {
      biggest = i;
    }
  }
  display(biggest);
}
function getResultInConsole(value) {
  console.log(`le mot le plus long est "${value}".`);
}

getBiggestWord(words, getResultInConsole);

// -----------------------------------
console.log(
  "3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années."
);

console.log();

// -----------------------------------
console.log(
  "4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante."
);

console.log();

// -----------------------------------
console.log(
  "5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre."
);

console.log();

// -----------------------------------
console.log(
  "6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau."
);

console.log();

// -----------------------------------
console.log(
  "7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant."
);

const players = {
  Camille: 88,
  Lola: 125,
  Isaac: 174,
  Aldrick: 426,
  Ismaël: 248,
  Lilian: 478,
  Charley: 225,
  Thierry: 255,
  Cameron: 205,
  Tanguy: 155,
  Jenny: 125,
};

console.log();

// -----------------------------------
console.log(
  "8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000."
);

console.log();
