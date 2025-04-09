function printNames(germanPokemonName) {
    return/*html*/`
        <div id="miniPokeCard">

        </div>
    `
}

function renderMiniCradsTemplate(i) {
    return/*html*/`
        <div id="miniPokeCard">
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
            <img src="./assets/img/pokeIdsymb.png" alt="">
            <p>${id}</p>
        </div>
    `
}

function renderTypes(type) {
    return/*html*/`
        <div class="single-type-cart">
            <p>${type}</p>
        </div>
    `
}

function renderPic(gif) {
    return/*html*/`
        <img src="${gif}" alt="">
    `
}