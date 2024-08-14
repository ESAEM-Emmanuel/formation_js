// import { listeMots, listePhrases } from './config.js';
let score = 0;
let nombreQuestions = 0;
let motUtilisateur = "";

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