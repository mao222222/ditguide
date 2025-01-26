// Data ya maeneo
const locations = {
    "alama zinazoitajika ili kuweza kufanya university examination (ue)": {
        image: "https://via.placeholder.com/600x400?text=Maktaba",
        description: "ilikuweza kufanya university examination (ue) unatakiwa kwenye quiz,test,na kazi nyingine utakazopewa na lecturer wa iyo module ufikishe alama 24 kati ya 60"
    },
    "alama ngapi zinaitajika ilikufaulu university examination (ue)": {
        image: "https://via.placeholder.com/600x400?text=Darasa+E203",
        description: "ilikufaulu university examination(ue) unatakiwa uwe na alama 16 kati ya 40."
    },
    "nielekeze library 1": {
        image: "images/star.png",
        description: "Ukipitia lango kuu ambalo linaambatana na kituo Cha mwendo Kasi tembea hatua chache  baada ya ofisi ya walinzi jengo linalofuata mkono wa kushoto ,ingia ndani ya ilo jengo floor ya Kwanza ndio library 1"
    },
    "nielekeze library 2": {
        image: "images/star.png",
        description: "Ukipitia lango kuu ambalo linaambatana na kituo Cha mwendo Kasi tembea hatua chache baada ya ofisi ya walinzi jengo linalofuata mkono wa kulia, ingia ndani ya ilo jengo floor ya pili ukiingia angalia kuelekea kituo Cha mwendo Kasi DIT kilipo piga hatua chache mbele ingia mlango uliopo mkono wako wa kushoto humo ndio library 2"
    },
    "nielekeze library 3": {
        image: "images/star.png",
        description: "Ukipitia lango kuu ambalo linaambatana na kituo Cha mwendo Kasi tembea hatua chache baada ya ofisi ya walinzi jengo linalofuata mkono wa kulia, ingia ndani ya ilo jengo floor ya pili ukiingia angalia kuelekea kituo Cha mwendo Kasi kilipo piga hatua chache mbele ingia mlango uliopo mkono wako wa kulia upande wa kituo Cha mwendo  Kasi DIT kilipo humo ndio library 3"
    },
    "nielekeze stationery": {
        image: "images/star.png",
        description: "Ukipitia lango kuu ambalo linaambatana na kituo Cha mwendo Kasi tembea hatua chache baada ya ofisi ya walinzi jengo linalofuata mkono wa kulia lililotazamana na jengo la library kunaduka hapo ndio stationery ya DIT"
   }
};

// Kazi ya kutafuta maeneo
function searchLocation() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const suggestions = document.getElementById("suggestions");
    const searchResults = document.getElementById("searchResults");
    const searchImage = document.getElementById("searchImage");
    const searchDescription = document.getElementById("searchDescription");

    suggestions.innerHTML = "";
    searchResults.style.display = "none";

    if (searchQuery.trim() === "") {
        suggestions.innerHTML = "";
        return;
    }

    // Tafuta maeneo yanayofanana
    let matches = [];
    for (let key in locations) {
        if (key.includes(searchQuery)) {
            matches.push(key);
        }
    }

    // Onyesha matokeo au pendekezo la maeneo
    if (matches.length > 0) {
        matches.forEach(match => {
            let suggestionDiv = document.createElement("div");
            suggestionDiv.classList.add("suggestion");
            suggestionDiv.textContent = match;
            suggestionDiv.onclick = () => {
                showLocation(match);
            };
            suggestions.appendChild(suggestionDiv);
        });
    } else {
        let noResultDiv = document.createElement("div");
        noResultDiv.textContent = "Hakuna matokeo yanayolingana.";
        noResultDiv.style.color = "red";
        suggestions.appendChild(noResultDiv);
    }
}

// Onyesha eneo lililochaguliwa
function showLocation(locationKey) {
    const searchResults = document.getElementById("searchResults");
    const searchImage = document.getElementById("searchImage");
    const searchDescription = document.getElementById("searchDescription");

    const location = locations[locationKey];
    searchImage.src = location.image;
    searchDescription.textContent = location.description;
    searchResults.style.display = "block";

    // Ficha pendekezo baada ya kuchagua
    document.getElementById("suggestions").innerHTML = "";
}
