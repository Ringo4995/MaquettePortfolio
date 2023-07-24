function togglePortfolio() {
    const show = document.getElementById("porofolio");
    const cachedElement = document.getElementById("cached");

    if (cachedElement.style.display === "block") {
        cachedElement.style.display = "none";
        show.style.backgroundColor = "transparent";
    } else {
        cachedElement.style.display = "block";
        show.style.backgroundColor = "lightgrey";
    }
}


document.getElementById("porofolio").addEventListener("click", togglePortfolio);

export{ togglePortfolio };