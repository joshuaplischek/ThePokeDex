let loadAmount = 20;
const MAX_POKEMON_ID = 493;
let startLoad = 0;
let url = `https://pokeapi.co/api/v2/pokemon?limit=${loadAmount}&offset=${startLoad}`;
let pokemonDatas = []; // Hier werden die Daten gespeichert

function init() {
    getAllData();
    addEventListener()
}

function updateUrl() {
    url = `https://pokeapi.co/api/v2/pokemon?limit=${loadAmount}&offset=${startLoad}`;
}

function addEventListener(){
    document.getElementById('search-input').addEventListener('input', function(event) {
        const query = event.target.value.trim();
        if (query.length >= 3) {
            searchInRenderedPokemon(query);
        } else {
            document.querySelectorAll('.pokemon-card').forEach(card => card.style.display = '');
        }
    });
}

async function getAllData() {
    openloadingOverlay();
    let response = await fetch(url);
    let translatet = await response.json();
    let everyPoke = translatet.results;
    await fetchAndStorePokemonData(everyPoke);
    renderAllCardsFromArray();
    if (startLoad + loadAmount >= MAX_POKEMON_ID) {
        document.getElementById('buttonContainer').style.display = 'none';
    }
    dNone();
}

async function fetchAndStorePokemonData(everyPoke) {
    for (let i = 0; i < everyPoke.length; i++) {
        let globalIndex = startLoad + i;
        let pngUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${globalIndex+1}.png`;
        let fetchPng = await fetch(pngUrl);
        let pokeData = await (await fetch(everyPoke[i].url)).json();
        let speciesData = await (await fetch(pokeData.species.url)).json();
        let germanPokemonName = speciesData.names[5].name;
        let IdOfPokemon = pokeData.id;
        let typeOfPokemons = pokeData.types;
        // Daten ins Array pushen
        pokemonDatas.push({
            globalIndex,
            germanPokemonName,
            IdOfPokemon,
            typeOfPokemons,
            pngUrl: fetchPng.url
        });
    }
}

function renderAllCardsFromArray() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = ""; // Vorherige Karten entfernen
    for (let i = 0; i < pokemonDatas.length; i++) {
        renderCardFromArray(i);
    }
    renderSeenPokemon();
}

function renderCardFromArray(i) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML += renderMiniCradsTemplate(i);
    let poke = pokemonDatas[i];
    printGermanPokeName(poke.germanPokemonName, poke.globalIndex);
    getPokeId(poke.IdOfPokemon, poke.globalIndex);
    getPokemonTypes(poke.typeOfPokemons, poke.globalIndex);
    setPokeImage(poke.pngUrl, poke.globalIndex);
}

function setPokeImage(pngUrl, i) {
    let pokeGif = document.getElementById(`pokemonImg${i}`);
    pokeGif.innerHTML += renderPic(pngUrl);
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
        let pokemonType = type.type.name;
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

async function loadMore(){
    openloadingOverlay();
    startLoad += loadAmount;
    renderSeenPokemon();
    updateUrl();
    let response = await fetch(url);
    let translatet = await response.json();
    let everyPoke = translatet.results;
    await fetchAndStorePokemonData(everyPoke);
    renderAllCardsFromArray();
    if (startLoad + loadAmount >= MAX_POKEMON_ID) {
        document.getElementById('buttonContainer').style.display = 'none';
    }
    dNone();
}

function openloadingOverlay() {
    let morebutton = document.getElementById('buttonContainer')
    let loadOverlay = document.getElementById('loadingOverlay')
    loadOverlay.style.display = `flex`;
    morebutton.style.display = `none`;
}

function dNone() {
    let morebutton = document.getElementById('buttonContainer')
    let loadOverlay = document.getElementById('loadingOverlay')
    loadOverlay.style.display = `none`;
    morebutton.style.display = `flex`;
}

function openPokemonOverlay(i){
    let infoOverlay = document.getElementById(`pokemonInfoOverlay`)
    infoOverlay.style.display = `flex`;
    document.body.style.overflowY = `hidden`;
    renderInfoOverlay(i);
}

function closeinfoOverlay() {
    let infoOverlay = document.getElementById('pokemonInfoOverlay')
    infoOverlay.style.display = `none`;
    document.body.style.overflowY = `visible`;
}

function searchInRenderedPokemon(query) {
    const cards = document.querySelectorAll('.pokemon-card');
    cards.forEach(card => {
        const nameElement = card.querySelector('.pokemon-name');
        if (!nameElement) return;

        const name = nameElement.textContent.toLowerCase();
        if (name.includes(query.toLowerCase())) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}


