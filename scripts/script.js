// loading state
document.addEventListener("DOMContentLoaded", function () { //Laat de DOM eerst inladen
    setTimeout(function () {
        hideLoading(); 
    }, 1000); // 1 sec wachten tot we hideLoading functie aanroepen
});

function hideLoading() { // functie voor hideLoading
    var loadingContainer = document.getElementById("loadingContainer"); // defineer de loading container met de id: loading container 
    var content = document.querySelector("main"); // haal de content "main" op

    loadingContainer.style.display = "none"; // verberg dan de loading container 
    content.style.display = "block"; // toon de content in block stijl
}

async function siteInfo() { //Functie die de JSON file gaat ophalen en waardes gaat veranderen
    const response = await fetch("./public/data/siteData.json"); //Maakt de variabele response aan door het JSON bestand te fetchen (en te wachten tot het binnen is doormiddel van await)
    const siteJson = await response.json(); //Zet het JSON bestand wat binnen komt als text om naar een JSON
    // document.getElementById('namePlaceholder').innerText = siteJson.name; //Zoekt het element met de Id namePlaceholder op en past de waarde aan gebaseerd op wat er in de variabele siteJson staat met de key (idk of het ook zo heet in JSON) name
    console.log(siteJson)
}

siteInfo() //Voert de functie uit 

