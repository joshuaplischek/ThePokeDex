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
            <div>
                <div id="pokemonType"></div>
                <div id="pokemonImg"></div>
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