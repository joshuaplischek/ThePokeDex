async function renderInfoOverlay(i) {
    let infoOverlay = document.getElementById(`pokemonInfoOverlay`)
    infoOverlay.innerHTML= "";
    let infoUrl = `https://pokeapi.co/api/v2/pokemon/${i+1}`
    let fetchInfoUrl = await (await fetch(infoUrl)).json();
    let speciesData = await (await fetch(fetchInfoUrl.species.url)).json();
    infoOverlay.innerHTML = infoCardTemplate(i);
    getNamesForInfocard(speciesData)
    getIdForInfocard(fetchInfoUrl)
    getTypesForInfocard(fetchInfoUrl)
    getPokemonGif(i);
    // getStats();
}

function getNamesForInfocard(pokemon) {
    let nameConatiner = document.getElementById(`nameAndTypeContainer`)
    let germanPokemonName = pokemon.names[5].name;
    nameConatiner.innerHTML = renderInfoNameTemplate(germanPokemonName)
}

function getIdForInfocard(url) {
    let idConatiner = document.getElementById(`nameAndTypeContainer`)
    let IdOfPokemon = url.id;
    idConatiner.innerHTML += renderInfoIdTemplate(IdOfPokemon)
}

function getTypesForInfocard(url) {
    let typeOfPokemons = url.types;
    let card = document.getElementById(`pokeInfoCard`);
    let pokeType = document.getElementById(`pokemonInfoType`);
    for (let indexType = 0; indexType < typeOfPokemons.length; indexType++) {
        let globalInfoIndex = startLoad + indexType;
        const type = typeOfPokemons[indexType];
        let pokemonType = type.type.name;
        let translated = translateType(pokemonType);      
        pokeType.innerHTML += renderInfoTypeTemplate(translated, indexType, globalInfoIndex);
        colorInfoTypes(indexType, type, globalInfoIndex);
    }    
    colorInfoCard(card, typeOfPokemons);
    console.log(typeOfPokemons)
}

function colorInfoTypes(indexType, type, globalInfoIndex) {
    let typeInfoDiv = document.getElementById(`typeInfoContainer${globalInfoIndex}-${indexType}`)
    let colored = checkColorType(type.type.name);
    typeInfoDiv.style.background += colored;
}

async function getPokemonGif(i){
    let pokeGif = document.getElementById(`pokemonGif`)
    let gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${i+1}.gif`
    let fetchGif = await fetch(gifUrl);
    let gif = fetchGif.url;
    pokeGif.innerHTML = renderGifTemplate(gif);
}

function colorInfoCard(card, types){
    let colorOne = pokemonColor[types[0].type.name];
    let colorTwo = types[1] ? pokemonColor[types[1].type.name] : colorOne;
    card.style.background = `linear-gradient(${colorOne}, ${colorTwo})`;
}