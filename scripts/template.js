function renderMiniCradsTemplate(i) {
    return/*html*/`
        <div onclick="openPokemonOverlay(${i})" class="miniPokeCard" id="miniPokeCard${i}">
            <div class="pokemonIds" id="pokemonContainerId${i}"></div>
            <div class="pokemon-name" id="pokemonName${i}"></div>
            <div class="type-image-container">
                <div class="pokemon-types">
                    <div id="pokemonType${i}"></div>
                </div>
                <div class="poke-image" id="pokemonImg${i}"></div>
            </div>
        </div> 
    `
}

function renderNameTemplate(name) {
    return/*html*/`
        <h3>${name}</h3>
    `
}

function renderIdTemplate(id) {
    return/*html*/`
        <div class="id-conatiiner">
            <img src="./assets/img/pokemon-colored.png" alt="">
            <p>${id}</p>
        </div>
    `
}

function renderTypes(type, i, indeyType) {
    return/*html*/`
        <div id="typeContainer${i}-${indeyType}" class="single-type-cart">
            <p>${type}</p>
        </div>
    `
}

function renderPic(png) {
    return/*html*/`
        <img src="${png}" alt="">
    `
}

function infoCardTemplate(i){
    return/*html*/`
        <div class="pokemon-info-container" id="pokeInfoCard" onclick="cannotClickThePopUp(event)">
            <div>  <!-- oberer Container mit Bild, typ und name plus id -->
                <div id ="nameAndTypeContainer"></div> <!-- Name und Id -->
                <div> <!--Container mit typen und Gif -->
                    <div id="pokemonInfoType"></div> <!-- Typen-->
                    <div id="pokemonGif"></div> <!-- GIF-->
                </div>
            </div>
            <div class="info-area"> <!-- unterer Container-->
                <div class="tabs"><!-- Reiter der Katrgorien -->
                    <div id="aboutTab" onclick="displayAbout()" class="single-tab"><p>Über</p></div>
                    <div id="statsTab" onclick="displayStats()" class="single-tab"><p>Werte</p></div>
                    <div id="genderTab" onclick="displayGenders()" class="single-tab"><p>Geschlecht</p></div>
                    <div id="evolutionsTab" onclick="displayEvolutions()" class="single-tab"><p>Entwicklungen</p></div>
                </div>
                <div> <!-- Stats bzw Infos -->
                    <div id="aboutArea"></div>
                    <div id="statsArea"></div>
                    <div id="gendersArea"></div>
                    <div id="evolutionsArea"></div>
                </div>
                <div></div> <!-- navigation -->
            </div>
            <img class="backround-image" src="../assets/img/pokeIdsymb.png" alt="">
        </div>
    `
}

function renderInfoNameTemplate(name) {
    return/*html*/`
        <div class="info-name"><p>${name}</p></div>
    `
}

function renderInfoIdTemplate(id) {
    return/*html*/`
        <div class="pokemon-info-id info-id-conatiiner">
            <img src="./assets/img/pokemon-colored.png" alt="">
            <p>${id}</p>
        </div>
    `
}

function renderGifTemplate(gif){
    return/*html*/`
        <img src="${gif}" alt="">
    `
}

function renderInfoTypeTemplate(translated, indexType, i) {
    return/*html*/`
    <div id="typeInfoContainer${i}-${indexType}" class="single-info-type-cart">
        <p>${translated}</p></div>
    `
}

function renderStatsTemplate(germanStats, baseStats) {
    return/*html*/`
        <div class="stats-infos">
            <p>${germanStats}</p>
            <p>${baseStats}</p>
        </div>
    `
}