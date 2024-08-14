// let monBouton1 = document.getElementById("monBouton1");
// monBouton1.addEventListener("click", function () {
//     console.log("Vous avez cliqué sur le bouton1")
//     alert("Vous avez cliqué sur le bouton1")
// });

// let monBouton2 = document.getElementById("monBouton2");
// monBouton2.addEventListener("click", function () {
//     console.log("Vous avez cliqué sur le bouton2")
//     alert("Vous avez cliqué sur le bouton2")
// });
// let monBouton1 = document.getElementById("monBouton1");
// monBouton1.addEventListener("click", (eventMonBouton1)=> {
//     console.log("Vous avez cliqué sur le bouton1");
//     console.log(eventMonBouton1);
//     alert("Vous avez cliqué sur le bouton1");
// });

// let monBouton2 = document.getElementById("monBouton2");
// monBouton2.addEventListener("click", (eventMonBouton2)=> {
//     console.log("Vous avez cliqué sur le bouton2")
//     console.log(eventMonBouton2);
//     alert("Vous avez cliqué sur le bouton2")
// });

let listBouton = document.querySelectorAll("button");
for(let i=0; i<listBouton.length; i++) {
    let actualBouton = listBouton[i];
    console.log(actualBouton);
    actualBouton.addEventListener("click", (eventactualBouton)=> {
        monButton = eventactualBouton.target
        console.log("Vous avez cliqué sur "+ monButton.id)
        console.log(monButton.id);
        alert("Vous avez cliqué sur "+ monButton.id);
    });
}