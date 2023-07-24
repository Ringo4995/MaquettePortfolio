import { togglePortfolio } from "./togglePortfolio.js";



const imageCached = document.getElementById("hiddenMount");
const croix = document.getElementById("croix");

imageCached.addEventListener("click", ()=>{
    if (document.getElementById("bigMount").style.display === "block") {
        document.getElementById("bigMount").style.display = "none";
    } else{
        document.getElementById("bigMount").style.display = "block";
    }
})

croix.addEventListener("click", ()=>{
    if (document.getElementById("bigMount").style.display === "none") {
        document.getElementById("bigMount").style.display = "block";
    } else{
        document.getElementById("bigMount").style.display = "none";
    }
})

// j'ai eu du mal et j'ai pas mal pédalé dans le vide donc il manque la fonction et les paramètres, mais l'esprit est là et ça fonctionne avec la première image (sry)