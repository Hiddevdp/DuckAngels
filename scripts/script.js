const main = document.querySelector(".personalInfo");

async function siteInfo() { //Functie die de JSON file gaat ophalen en waardes gaat veranderen
    const response = await fetch("./public/data/siteData.json"); //Maakt de variabele response aan door het JSON bestand te fetchen (en te wachten tot het binnen is doormiddel van await)
    const siteJson = await response.json(); //Zet het JSON bestand wat binnen komt als text om naar een JSON
    // document.getElementById('namePlaceholder').innerText = siteJson.name; //Zoekt het element met de Id namePlaceholder op en past de waarde aan gebaseerd op wat er in de variabele siteJson staat met de key (idk of het ook zo heet in JSON) name
    console.log(siteJson)
    changeData(siteJson);
}
siteInfo() //Voert de functie uit 

// Bron: https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
function changeData(siteJson) {
    Object.values(siteJson.mensen).forEach(item => {
        const name = item.naam;

        const html = 
        `
        <article>
            <h2>${name}</h2>
            <ul>
                <li>Day of birth</li>
                <li>City</li>
                <li>Favorite music genre</li>
            </ul>
            <img src="" alt="Profile picture">
        </article>
        `;
        main.insertAdjacentHTML("beforeend", html);
    });
}
