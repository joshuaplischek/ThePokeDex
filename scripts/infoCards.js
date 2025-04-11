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
    console.log(germanPokemonName)
    nameConatiner.innerHTML = renderInfoNameTemplate(germanPokemonName)
}

function getIdForInfocard(url) {
    let idConatiner = document.getElementById(`nameAndTypeContainer`)
    let IdOfPokemon = url.id;
    console.log(IdOfPokemon)
    idConatiner.innerHTML += renderInfoIdTemplate(IdOfPokemon)
}

function getTypesForInfocard(url) {
    let typeOfPokemons = url.types;
    console.log(typeOfPokemons)
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