// // nom
// let nom = document.getElementById("nom");
// console.log(nom); 
// nom.addEventListener("change", () => {
//     console.log(nom.value);
// });

// // email
// let email = document.getElementById("email");
// console.log(email); 
// email.addEventListener("change", () => {
//     console.log(email.value);
// });

// // message
// let message = document.getElementById("message");
// console.log(message); 
// message.addEventListener("change", () => {
//     console.log(message.value);
// });

// // films
// let films = document.getElementById("films");

// // Afficher la valeur sélectionnée initiale
// let selectedFilm = films.value;
// console.log("Film sélectionné initial:", selectedFilm);

// // Boucler sur les options et afficher leurs valeurs
// for (let i = 0; i < films.options.length; i++) {
//     console.log("Option", i, ":", films.options[i].value);
// }

// // Écouter l'événement "change" pour détecter les modifications de sélection
// films.addEventListener("change", () => {
//     // Obtenir la valeur sélectionnée
//     let selectedFilm = films.value;
//     console.log("Film sélectionné:", selectedFilm);
// });

// // condition
// let conditions = document.getElementById("conditions");
// let conditionState = conditions.checked;
// console.log(conditionState);
// conditions.addEventListener("change", () => {
//     console.log(conditions.checked);
// });



// let listeBtnRadio = document.querySelectorAll("input[type=radio]");

// // Parcourir les boutons radio pour afficher l'état initial
// for(let i = 0; i < listeBtnRadio.length; i++) {
//     if(listeBtnRadio[i].checked) {
//         console.log("Initialement sélectionné:", listeBtnRadio[i].value);
//     }
//     // console.log("Bouton:", listeBtnRadio[i]);
//     // console.log("Est sélectionné:", listeBtnRadio[i].checked);
// }

// // Ajouter un écouteur d'événements à chaque bouton radio
// listeBtnRadio.forEach((radio) => {
//     radio.addEventListener("change", () => {
//         // Quand un bouton radio est changé, vérifier lequel est sélectionné
//         for(let i = 0; i < listeBtnRadio.length; i++) {
//             if(listeBtnRadio[i].checked) {
//                 console.log("Nouvelle sélection:", listeBtnRadio[i].value);
//                 console.log("Bouton:", listeBtnRadio[i]);
//             }
//             // console.log("Bouton:", listeBtnRadio[i]);
//             // console.log("Est sélectionné:", listeBtnRadio[i].checked);
//         }
//     });
// });

// const baliseNom = document.getElementById('nom');
// baliseNom.addEventListener('input', (event) => {
//     const valeurNom = event.target.value;
//     if (valeurNom === "") {
//         console.log('Le champ nom est vide');
//     } else {
//         console.log('Le champ nom est rempli');
//     }
// });



function verifierChamp(balise){
    if (balise.value === "") {
        balise.classList.add("error");
    } else{
        balise.classList.remove("error");
    }
}

let form = document.querySelector("form");
let nom = document.getElementById("nom"); // Obtenir la valeur de l'input
let email = document.getElementById("email");
let message = document.getElementById("message");
let films = document.getElementById("films");

nom.addEventListener('change', (event) => {
    verifierChamp(nom);
});

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prévenir l'envoi du formulaire

    verifierChamp(nom)
    verifierChamp(email)
    verifierChamp(message)
    verifierChamp(films)

    console.log(nom.value); // Afficher la valeur de email

    console.log(email.value); // Afficher la valeur de email

    console.log(message.value); // Afficher la valeur de message

    console.log(films.value); // Afficher le film sélectionné

    let conditions = document.getElementById("conditions").checked;
    console.log(conditions); // Afficher si les conditions sont acceptées

    let listeBtnRadio = document.querySelectorAll("input[name='residence']");
    listeBtnRadio.forEach((radio) => {
        if (radio.checked) {
            console.log("Nouvelle sélection:", radio.value); // Afficher la valeur du bouton radio sélectionné
        }
    });
});