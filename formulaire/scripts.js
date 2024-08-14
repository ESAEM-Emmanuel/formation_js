// nom
let nom = document.getElementById("nom");
console.log(nom); 
nom.addEventListener("change", () => {
    console.log(nom.value);
});

// email
let email = document.getElementById("email");
console.log(email); 
email.addEventListener("change", () => {
    console.log(email.value);
});

// message
let message = document.getElementById("message");
console.log(message); 
message.addEventListener("change", () => {
    console.log(message.value);
});

// condition
let conditions = document.getElementById("conditions");
let condition_state = conditions.checked;
console.log(condition_state);
conditions.addEventListener("change", () => {
    console.log(conditions.checked);
    console.log(condition_state);
});

let listeBtnRadio = document.querySelectorAll("input[type=radio]");
for(let i = 0; i < listeBtnRadio.length; i++) {
    if(listeBtnRadio[i].checked){
        console.log(listeBtnRadio[i].value);
    }
    console.log(listeBtnRadio[i]);
    console.log(listeBtnRadio[i].checked);
}


// let baliseAccepter = document.getElementById("accepter")
// let accepter = baliseAccepter.checked
// console.log(accepter); // affiche true ou false

// let baliseCouleur = document.querySelectorAll('input[name="couleur"]')
// let couleur = ""
// for (let i = 0; i < baliseCouleur.length; i++) {
//     if (baliseCouleur[i].checked) {
//         couleur = baliseCouleur[i].value
//         break
//     }
// }
// console.log(couleur) // affiche la valeur du radio coché