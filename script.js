let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

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
    let print = document.getElementById('namesList');

    for (let i = 0; i < everyPoke.length; i++) {
        let pokeUrlFetch = await fetch(everyPoke[i].url);
        let pokeFetchToJason = await pokeUrlFetch.json();
        
        let pokeSpeciesFetch = await fetch(pokeFetchToJason.species.url);
        let pokeSpeciesFetchToJason = await pokeSpeciesFetch.json();
        let germanPokemonName = pokeSpeciesFetchToJason.names[5].name;
        console.log(germanPokemonName);
        print.innerHTML += printNames(germanPokemonName);
    }
}

function printNames(germanPokemonName){
    return/*html*/`
        <li>${germanPokemonName}</li>
    `
}


// Das abrufen der deutschen Namen Functioniert mit der getGermanNames() function!!