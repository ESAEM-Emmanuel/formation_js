let image = document.getElementById("fleure");
// image.setAttribute("src", "images/olivier.jpg");
image.src = "images/olivier.jpg";
image.setAttribute("alt", "Ceci est une image de test modifiée");
// image.classList.remove("noirEtBlanc");
image.classList.add("noirEtBlanc");

// premiere façon d'insérer du code HTML
let body = document.querySelector("body");// selectionner le corps de la page
let titrePage = "Titre de ma page";// créer une variable titre
let h1 = document.createElement("h1");// créer un élément h1
h1.innerText = titrePage;// affecter le contenu de h1
body.appendChild(h1);//

// Deuxième façon d'intégrer du code html dans une page html
let html = `
    <header>
        <h1>
            ${titrePage+" Emmanuel"}
        </h1>
        <button id="monBouton">Cliquez-moi !</button>
    </header>

`
body.innerHTML = html

let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", function () {
    console.log("Vous avez cliqué sur le bouton")
});
