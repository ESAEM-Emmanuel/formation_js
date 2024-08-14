let divJeu = document.getElementById("divJeu");
let h2 = document.querySelector("#divJeu h2");
let listH2 = document.querySelectorAll("h2");
let listP = document.querySelectorAll("p");
console.log("divJeu", divJeu);
console.log("h2", h2);
console.log("listH2", listH2);
console.log("listP", listP);
for(let i = 0; i < listH2.length;i++) {
    console.log("divJeu", listH2[i], "position i = ", i);
}
for(let i = 0; i < listP.length;i++) {
    console.log("divJeu", listP[i], "position i = ", i);
}