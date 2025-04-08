function printNames(germanPokemonName){
    return/*html*/`
        <div id="miniPokeCard">

        </div>
    `
}

function renderMiniCradsTemplate(i) {
    return/*html*/`
        <div id="miniPokeCard">
            <div id="pokemonId"></div>
            <div id="pokemonName${i}"></div>
            <div>
                <div id="pokemonType"></div>
                <div id="pokemonImg"></div>
            </div>
        </div> 
    `
}

function renderNameTemplate(name){
    return/*html*/`
        <h3>${name}</h3>
    `
}