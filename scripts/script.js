// loading state
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        hideLoading(); 
    }, 1000); 
});

// na de timer, content laten zien
function hideLoading() {
    const loadingContainer = document.getElementById("loadingContainer");
    const content = document.querySelector("main");

    loadingContainer.style.display = "none";
    content.style.display = "grid";
}

async function siteInfo() { //Functie die de JSON file gaat ophalen en waardes gaat veranderen
    const response = await fetch("info.json"); //Maakt de variabele response aan door het JSON bestand te fetchen (en te wachten tot het binnen is doormiddel van await)
    const siteJson = await response.json(); //Zet het JSON bestand wat binnen komt als text om naar een JSON
    // document.getElementById('namePlaceholder').innerText = siteJson.name; //Zoekt het element met de Id namePlaceholder op en past de waarde aan gebaseerd op wat er in de variabele siteJson staat met de key (idk of het ook zo heet in JSON) name
    // console.log(siteJson)

    personalInfoData(siteJson);
    muziekData(siteJson);
}
siteInfo() //Voert de functie uit 

// Bron: https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
function personalInfoData(siteJson) {
    const personalInfoSection = document.querySelector(".personalInfo");
    Object.values(siteJson.mensen).forEach(item => {
        const name = item.naam;
        const img = item.image;
        const date = item.geboortedatum;
        const city = item.woonplaats;
        const genre = item.favoriet_genre;

        const html = 
        `
        <article>
            <h3>${name}</h3>
            <ul>
                <li>${date}</li>
                <li>${city}</li>
                <li>${genre}</li>
            </ul>
            <img src="${img}" alt="Profile picture">
        </article>
        `;
        personalInfoSection.insertAdjacentHTML("beforeend", html);
    });
};

function muziekData(siteJson) {
    const songsSection = document.querySelector(".songs");
    siteJson.mensen.forEach(user => {
        user.tracks.forEach(item => {
            const name = item.name;
            const artist = item.artists[0].name;
            const album = item.album.name;
            const year = item.album.release_date;
            const img = item.album.images[1].url;
            const genre = item.album.genre;
            const userImg = user.image; // Profile picture of the user

            const html = 
            ` 
            <article>
                    <h2>${name}</h2>
                    <ul>
                        <li>Artist: ${artist}</li>
                        <li>Album: ${album} - ${year}</li>
                    </ul>
                    <h3>${genre}</h3>
                    <div>
                        <img src="${img}" alt="Album Cover">
                        <div>
                            <div></div>
                        </div>
                        <img src="${userImg}" alt="Profile Picture"> <!-- Replace placeholder with user's profile picture -->
                    </div>
                </article>
            `;
            songsSection.insertAdjacentHTML("beforeend", html);
        });
    });
}

