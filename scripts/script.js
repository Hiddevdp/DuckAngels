
// loading state
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        hideLoading(); 
    }, 1000); 
});

// na de timer, content laten zien
function hideLoading() {
    var loadingContainer = document.getElementById("loadingContainer");
    var content = document.querySelector("main");

    loadingContainer.style.display = "none";
    content.style.display = "block";
}

async function siteInfo() { //Functie die de JSON file gaat ophalen en waardes gaat veranderen
    const response = await fetch("./public/data/siteData.json"); //Maakt de variabele response aan door het JSON bestand te fetchen (en te wachten tot het binnen is doormiddel van await)
    const siteJson = await response.json(); //Zet het JSON bestand wat binnen komt als text om naar een JSON
    // document.getElementById('namePlaceholder').innerText = siteJson.name; //Zoekt het element met de Id namePlaceholder op en past de waarde aan gebaseerd op wat er in de variabele siteJson staat met de key (idk of het ook zo heet in JSON) name
    console.log(siteJson)
}

siteInfo() //Voert de functie uit 

