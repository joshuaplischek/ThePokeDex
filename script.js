let loadAmount = 10

let startLoad = 0

let url = `https://pokeapi.co/api/v2/pokemon?limit=${loadAmount}&offset=${startLoad}`;

function init() {
    getAllData();
}

// async function getData() {
//     // let url = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0";
//     // let url = "https://pokeapi.co/api/v2/pokemon/budew";
//     let url = "https://pokeapi.co/api/v2/pokemon/10";
//     let response = await fetch(url)
//     let translatet = await response.json();
//     let pokeSpeciesUrl = await fetch (translatet.species.url);
//     let pokeSpeciesJson = await pokeSpeciesUrl.json();
//     console.log(pokeSpeciesJson);
    
// }  

async function getAllData() {
    let response = await fetch(url)
    let translatet = await response.json();
    let everyPoke = translatet.results;
    getGermanNames(everyPoke);
}

async function getGermanNames(everyPoke) {
    let contentRef = document.getElementById('content');
    for (let i = 0; i < everyPoke.length; i++) {
        let pokeUrlFetch = await fetch(everyPoke[i].url);
        let pokeFetchToJason = await pokeUrlFetch.json();
        let pokeSpeciesFetch = await fetch(pokeFetchToJason.species.url);
        let pokeSpeciesFetchToJason = await pokeSpeciesFetch.json();
        let germanPokemonName = pokeSpeciesFetchToJason.names[5].name;
        let IdOfPokemon = pokeFetchToJason.id;
        let typeOfPokemons = pokeFetchToJason.types;
        contentRef.innerHTML += renderMiniCradsTemplate(i);
        printGermanPokeName(germanPokemonName, i);
        getPokeId(IdOfPokemon, i);
        getPokemonTypes(typeOfPokemons, i);
    }
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
    let pokeType = document.getElementById(`pokemonType${i}`);
    for (let indeyType = 0; indeyType < types.length; indeyType++) {
        const type = types[indeyType];
        pokeType.innerHTML += renderTypes(type.type.name);
    }
}
