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
        <div class="pokemon-info-container" id="pokeInfoCard">
            <div>  <!-- oberer Container mit Bild, typ und name plus id -->
                <div id ="nameAndTypeContainer"></div> <!-- Name und Id -->
                <div> <!--Container mit typen und Gif -->
                    <div></div> <!-- Typen-->
                    <div id="pokemonGif"></div> <!-- GIF-->
                </div>
            </div>
            <div> <!-- unterer Container-->
                <div></div> <!-- Reiter der Katrgorien -->
                <div> <!-- Stats bzw Infos -->

                </div>
                <div></div> <!-- navigation -->
            </div>
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