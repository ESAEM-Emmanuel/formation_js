let monAge = 42;// variable dont la valeur change au cours des instruction
monAge+=1;
monAge-=3;
monAge*=3;
monAge/=3;
console.log(monAge);
const nomPrenom = "Emmanuel";// variable dont la valeur ne change au cours des instruction
console.log(nomPrenom);
const entreesPremiereSemaine = 1000;
const entreesDeuxiemeSemaine = 2000;
const totalEntrees = entreesPremiereSemaine + entreesDeuxiemeSemaine;

// Modifier les variables
console.log(totalEntrees);
let monTitre = "Le titre de mon article";
let monContenu = 'Le contenu de mon article';
let punchline = monTitre + monContenu;
console.log(monTitre);
console.log(monContenu);
console.log(punchline);

let punchline2 = "Mon nom est Bond";
punchline2 += ", James Bond.";
punchline2 -= ", James Bond.";
// punchline vaut “Mon nom est Bond, James Bond.”

console.log(punchline2);
let connexionOk = false;
console.log(connexionOk)
connexionOk =! connexionOk;
console.log(connexionOk);

//concaténer un string
let placesDejaVendues = "150";
placesDejaVendues += "10";
console.log(placesDejaVendues);

// convertir un string en nombre
let placesDejaVendues2 = Number("150");
placesDejaVendues2 += Number("10");
console.log(placesDejaVendues2);
//exercice d'application
let totalLivres = 500;
console.log(totalLivres);
let affichageTotalLivres = totalLivres+50;
console.log(affichageTotalLivres);
affichageTotalLivres -= 10;
console.log(affichageTotalLivres);
affichageTotalLivres += 5;
console.log(affichageTotalLivres);
// *** Structurez des données grâce aux objets***
// Un Object (objet, en français) JavaScript est un conteneur. Il est composé de propriétés qui ont chacune une valeur.
let monPersonnage = {
nom: "Wayne",
prenom: "Bruce",
age: 35,
couleurPreferee: "noir",
hobbies: "sortir la nuit"
};
monPersonnage.vehiculePrefere = "Batmobile";
console.log(monPersonnage);
monPersonnage.couleurPreferee = "blanc";
console.log(monPersonnage);
console.log(monPersonnage.couleurPreferee);

let ticket = {
    nomFilm: "Film1",
    prix: 200.0 ,
    numeroSalle: 3
};
console.log(ticket);
console.log(ticket.nomFilm);
console.log(ticket.prix);
console.log(ticket.numeroSalle);

// *** Regroupez des données grâce aux tableaux ***
// Un tableau en JavaScript est donc un objet qui permet de lister plusieurs variables ou valeurs, et de les regrouper.
// créer le tableau
const maCollectionDeFilms = ["Titanic", "Jurassic Park", "Le Seigneur des Anneaux"];
const monFilmPrefere = "Titanic";
const monPremierFilm = "Le Seigneur des Anneaux";

const maCollectionDeFilms2 = [monFilmPrefere, monPremierFilm];
console.log(maCollectionDeFilms);
console.log(maCollectionDeFilms2);
let premierFilmDuTableau = maCollectionDeFilms[0];
let deuxiemeFilmDuTableau = maCollectionDeFilms[1];
let troisiemeFilmDuTableau = maCollectionDeFilms[2];
console.log(premierFilmDuTableau);
console.log(deuxiemeFilmDuTableau);
console.log(troisiemeFilmDuTableau);
const nombreDeFilms = maCollectionDeFilms.length;
console.log(nombreDeFilms);

// ***Modifiez votre tableau grâce aux méthodes***

// Ajoutez des données grâce à la méthode push
let mesFilms = ["Titanic", "Jurassic Park"];
mesFilms.push("Retour vers le futur");
console.log(mesFilms);

//Supprimez des données grâce à la méthode pop
let mesFilms2 = ["Titanic", "Jurassic Park", "Retour vers le futur"];
mesFilms2.pop();
console.log(mesFilms2);
// Copie par valeur
let variableSimple1 = 25;
let variableSimple2 = variableSimple1;
console.log(variableSimple1);
console.log(variableSimple2);

// Copie par référence la modification de variableComplexe1 entraine la modification de variableComplexe2
let variableComplexe1 = ['pomme', 'cerise'];
let variableComplexe2 = variableComplexe1;
let variableComplexe3 = [...variableComplexe1];// spread operator recopie par valeur du tableau
console.log(variableComplexe1);
console.log(variableComplexe2);
console.log(variableComplexe3);
variableComplexe1.push("mangue");
console.log(variableComplexe1);
console.log(variableComplexe2);
console.log(variableComplexe3);// la valeur de variableComplexe3 ne change pas même si variableComplexe1 change
let cdInventory = ["cd1","cd2","cd3","cd4","cd5"];
let playlist = cdInventory.slice(0, 3);
console.log(playlist);

// *** Appréhendez la logique de programmation ***
{/* <  inférieur à

<= inférieur ou égal à

=== égal à

>= supérieur ou égal à

>  supérieur à

!== différent de */}

// les tests de condition:
const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
let motUtilisateur = prompt("Entrez le mot : " + motApplication)
// condition if
if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}
// switch case pour ne pas faire plusieur if else imbriqué
switch (motUtilisateur) {
    case motApplication:
        console.log("Bravo !")
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}

// Répétez du code grâce aux boucles
// import { listeMots, listePhrases } from './config.js';
let score = 0;
let nombreQuestions = 0;
motUtilisateur = "";

let listePhrases = ["Pas de panique !","La vie, l’univers et le reste","Merci pour le poisson"];
let listeMots = ["Cachalot","Pétunia","Serviette", "Bananes"];

function retournerMessageScore(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions;
    return message;
}


const choixUtilisateur = prompt("choisissez mots ou phrases : ");

if (choixUtilisateur === "mots") {
    nombreQuestions = listeMots.length;
    for (let i = 0; i < listeMots.length; i++) {
        motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
        if (motUtilisateur === listeMots[i]) {
            score += 1;
            console.log("Bravo !");
        } else {
            console.log("Vous avez fait une erreur de frappe.");
        }
    }
} else if (choixUtilisateur === "phrases") {
    nombreQuestions = listePhrases.length;
    for (let i = 0; i < listePhrases.length; i++) {
        motUtilisateur = prompt("Entrez la phrase : " + listePhrases[i]);
        if (motUtilisateur === listePhrases[i]) {
            score += 1;
            console.log("Bravo !");
        } else {
            console.log("Vous avez fait une erreur de frappe.");
        }
    }
} else {
    console.log("Votre choix n'est pas compris entre phrases et mots; corrigez le.");
}

console.log(retournerMessageScore(score, nombreQuestions));

const listContacts = ["Testeur", "Komi", "Emmanuel"];
let j = 0;
while (listContacts[j] !== "Emmanuel") {
    j += 1;
    console.log("Vous n'êtes pas Emmanuel.");
}
console.log("Vous êtes ", listContacts[j], "le contact numéro ", j + 1);

