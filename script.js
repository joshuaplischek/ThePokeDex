let loadAmount = 20;

let startLoad = 0;

let url = `https://pokeapi.co/api/v2/pokemon?limit=${loadAmount}&offset=${startLoad}`;

function init() {
    getAllData();
}

function updateUrl() {
    url = `https://pokeapi.co/api/v2/pokemon?limit=${loadAmount}&offset=${startLoad}`;
}

async function getAllData() {
    let response = await fetch(url)
    let translatet = await response.json();
    let everyPoke = translatet.results;
    getGermanNames(everyPoke);
}

async function getGermanNames(everyPoke) {
    for (let i = 0; i < everyPoke.length; i++) {
        let globalIndex = startLoad + i;
        let gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${globalIndex+1}.png`
        let fetchGif = await fetch(gifUrl);
        let pokeUrlFetch = await fetch(everyPoke[i].url);
        let pokeFetchToJason = await pokeUrlFetch.json();
        let pokeSpeciesFetch = await fetch(pokeFetchToJason.species.url);
        let pokeSpeciesFetchToJason = await pokeSpeciesFetch.json();
        let germanPokemonName = pokeSpeciesFetchToJason.names[5].name;
        let IdOfPokemon = pokeFetchToJason.id;
        let typeOfPokemons = pokeFetchToJason.types;
        renderCard(globalIndex);
        printGermanPokeName(germanPokemonName, globalIndex);
        getPokeId(IdOfPokemon, globalIndex);
        getPokemonTypes(typeOfPokemons, globalIndex);
        getPokeImages(fetchGif, globalIndex)
    }
}

function renderCard(i) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML += renderMiniCradsTemplate(i);
    renderSeenPokemon();
}

function renderSeenPokemon() {
    let amountOfLoadedPokemons = document.getElementById(`seenPokemon`); 
    let renderAmount = startLoad;
    renderAmount += 20;
    amountOfLoadedPokemons.innerHTML = `[${renderAmount}]`
}

function printGermanPokeName(germanPokemonName ,i) {
    let pokeName = document.getElementById(`pokemonName${i}`);
    pokeName.innerHTML += renderNameTemplate(germanPokemonName);
}

async function getPokeId(IdOfPokemon, i) {
    let pokeId = document.getElementById(`pokemonContainerId${i}`);
    pokeId.innerHTML += renderIdTemplate(IdOfPokemon);
}

function getPokemonTypes(types, i){
    let card = document.getElementById(`miniPokeCard${i}`);
    let pokeType = document.getElementById(`pokemonType${i}`);
    for (let indeyType = 0; indeyType < types.length; indeyType++) {
        const type = types[indeyType];
        pokemonType = type.type.name;
        let translated = translateType(pokemonType);      
        pokeType.innerHTML += renderTypes(translated, i, indeyType);
        colorTypes(i, indeyType, type);
    }    
    colorCard(card, types);
}

function colorCard(card, types){
    let colorOne = pokemonColor[types[0].type.name];
    let colorTwo = types[1] ? pokemonColor[types[1].type.name] : colorOne;
    card.style.background = `linear-gradient(${colorOne}, ${colorTwo})`;
}

function colorTypes(i, indeyType, pokemonType) {
    let typeDiv = document.getElementById(`typeContainer${i}-${indeyType}`)
    let colored = checkColorType(pokemonType.type.name);
    typeDiv.style.background += colored;
}

function translateType(type) {
    return pokemonTypeTranslater[type] || type; 
}

function checkColorType(type) {
    return pokemonColor[type]
}

async function getPokeImages(fetchGif, i) {
    let pokeGif = document.getElementById(`pokemonImg${i}`)
    let gif = fetchGif.url;
    pokeGif.innerHTML += renderPic(gif)
}

async function loadMore(){
    startLoad += loadAmount;
    renderSeenPokemon();
    updateUrl();
    let response = await fetch(url)
    let translatet = await response.json();
    let everyPoke = translatet.results;
    getGermanNames(everyPoke);
}

function openOverlay(i) {
    console.log(`Das ist ${i+1}`);
    
}