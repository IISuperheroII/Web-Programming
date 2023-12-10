
window.onload = function () {

fetch("https://api.brawlapi.com/v1/maps")
.then(res => {
return res.json();
}).then(data => {

var gameModeLists = {
    "Gem Grab": [],
    "Heist": [],
    "Brawl Ball": [],
    "Bounty": [],
    "Hot Zone": [],
    "Knockout": [],
    "Wipeout": [],
    "Solo Showdown": [],
    "Duo Showdown": []
};

for (var i = 0; i < data.list.length; i++) {
    var currentGameMode = data.list[i].gameMode.name;
    if (gameModeLists.hasOwnProperty(currentGameMode)) {
        gameModeLists[currentGameMode].push(data.list[i]);
    } 
} 

let createdModes = []; 

for (var key in gameModeLists) {
    let cardDivup = document.createElement("div");
            cardDivup.setAttribute("class", "row mb-4 align-items-center justify-content-center");

    if (!createdModes.includes(key)) {
        let divcolor = "background-color:" + gameModeLists[key][0].gameMode.color + ";";
            let cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "card col-12 mb-1");
            cardDiv.setAttribute("style", divcolor);

        let cardBody = document.createElement("div");
            cardBody.setAttribute("class", "row align-items-center map-card-title");

        let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "mr-2 ls-is-cached lazyloaded");
            imageElement.setAttribute("src", gameModeLists[key][0].gameMode.imageUrl);
            imageElement.setAttribute("width", "32" );

        let cardTitle = document.createElement('h3');
            cardTitle.setAttribute('class', 'h3 recomm-mode-text pt-2');
            cardTitle.innerHTML = gameModeLists[key][0].gameMode.name;

        cardBody.appendChild(imageElement);
        cardBody.appendChild(cardTitle);

        cardDiv.appendChild(cardBody);

        cardDivup.appendChild(cardDiv);

        createdModes.push(key); 
    }
    // Create elements for each map
    if (gameModeLists.hasOwnProperty(key)) {
        for (var j = 0; j < gameModeLists[key].length; j++) {
            let cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "map-def col-6 col-md-4 col-lg-3 map-block mb-0");

            let cardBody = document.createElement("div");
            cardBody.setAttribute("class", "img-fluid map-block");

            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "ls-is-cached lazyloaded");
            imageElement.setAttribute("src", gameModeLists[key][j].imageUrl);

            cardBody.appendChild(imageElement);
            cardDiv.appendChild(cardBody);

            cardDivup.appendChild(cardDiv);

            let container1 = document.getElementById('content');
            container1.appendChild(cardDivup);
        }
    }
}

let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "mb-2 ");
    cardDiv.setAttribute("class", "vm-placement");

let container3 = document.getElementById('content');
    container3.appendChild(cardDiv);
});   
}
