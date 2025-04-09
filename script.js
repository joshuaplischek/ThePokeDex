let loadAmount = 40;

let startLoad = 0;

let url = `https://pokeapi.co/api/v2/pokemon?limit=${loadAmount}&offset=${startLoad}`;

function init() {
    getAllData();
}

async function getAllData() {
    let response = await fetch(url)
    let translatet = await response.json();
    let everyPoke = translatet.results;
    getGermanNames(everyPoke);
}

async function getGermanNames(everyPoke) {
    for (let i = 0; i < everyPoke.length; i++) {
        let gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
        let fetchGif = await fetch(gifUrl);
        let pokeUrlFetch = await fetch(everyPoke[i].url);
        let pokeFetchToJason = await pokeUrlFetch.json();
        let pokeSpeciesFetch = await fetch(pokeFetchToJason.species.url);
        let pokeSpeciesFetchToJason = await pokeSpeciesFetch.json();
        let germanPokemonName = pokeSpeciesFetchToJason.names[5].name;
        let IdOfPokemon = pokeFetchToJason.id;
        let typeOfPokemons = pokeFetchToJason.types;
        renderCard(i);
        printGermanPokeName(germanPokemonName, i);
        getPokeId(IdOfPokemon, i);
        getPokemonTypes(typeOfPokemons, i);
        getPokeGifs(fetchGif, i)
    }
}

function renderCard(i) {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML += renderMiniCradsTemplate(i);
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
        let translated = translateType(type.type.name);      
        pokeType.innerHTML += renderTypes(translated); 
    }    
    colorCard(card, types);
}

function colorCard(card, types){
    let colorOne = pokemonColor[types[0].type.name];
    let colorTwo = types[1] ? pokemonColor[types[1].type.name] : colorOne;

    card.style.background = `linear-gradient(${colorOne}, ${colorTwo})`;
}

function translateType(type) {
    return pokemonTypeTranslater[type] || type; 
}

async function getPokeGifs(fetchGif, i) {
    let pokeGif = document.getElementById(`pokemonImg${i}`)
    let gif = fetchGif.url;
    pokeGif.innerHTML += renderPic(gif)
}

async function loadMore(){
    let loadMoreUrl = `https://pokeapi.co/api/v2/pokemon?limit=${loadAmount}&offset=${startLoad}`;
    loadAmount += 20;
    let response = await fetch(loadMoreUrl)
    let translatet = await response.json();
    let everyPoke = translatet.results;
    getGermanNames(everyPoke);
}