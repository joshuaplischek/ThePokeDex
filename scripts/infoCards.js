async function renderInfoOverlay(i) {
    let infoOverlay = document.getElementById(`pokemonInfoOverlay`)
    infoOverlay.innerHTML= "";
    let infoUrl = `https://pokeapi.co/api/v2/pokemon/${i+1}`
    let fetchInfoUrl = await (await fetch(infoUrl)).json();
    let speciesData = await (await fetch(fetchInfoUrl.species.url)).json();
    infoOverlay.innerHTML = infoCardTemplate(i);
    getNamesForInfocard(speciesData);
    getIdForInfocard(fetchInfoUrl);
    getTypesForInfocard(fetchInfoUrl);
    getPokemonGif(i);
    getPokemonData(fetchInfoUrl, i);
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
}

function getPokemonData(url, i) {
    // getAbout(url, i);
    getStats(url, i);
    // getGenders();
    // getEvolutions();
}

async function getAbout(url, i){
    let statsSection = document.getElementById(`statsArea`)
    statsSection.innerHTML = "";
}

async function getStats(url, i){
    let allStats = url.stats;
    let statsSection = document.getElementById(`statsArea`)
    statsSection.innerHTML = "";
    for (let indexStats = 0; indexStats < allStats.length; indexStats++) {
        const stats = allStats[indexStats];
        let statsUrl = await ((await fetch(stats.stat.url)).json());
        let germanStats = statsUrl.names[4].name;
        let baseStats = stats.base_stat;
        console.log(germanStats);
        statsSection.innerHTML += renderStatsTemplate(germanStats, baseStats);
    }
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

function cannotClickThePopUp(event) {
    event.stopPropagation()
}

function displayAbout() {
    colorAbout();
    let aboutSection = document.getElementById(`aboutArea`);
    let statsSection = document.getElementById(`statsArea`);
    let genderSection = document.getElementById(`gendersArea`);
    let evoSection = document.getElementById(`evolutionsArea`);
    aboutSection.style.display =`Block`;
    statsSection.style.display =`none`;
    genderSection.style.display =`none`;
    evoSection.style.display =`none`;

}

function colorAbout(){
    let markTab = document.getElementById(`aboutTab`);
    let fristtTab = document.getElementById(`statsTab`);
    let thirdTab = document.getElementById(`genderTab`);
    let fouthTab = document.getElementById(`evolutionsTab`);
    markTab.style.backgroundColor =`rgb(221, 220, 220)`;
    fristtTab.style.backgroundColor =`white`;
    thirdTab.style.backgroundColor =`white`;
    fouthTab.style.backgroundColor =`white`;
}

function displayStats() {
    colorStats();
    let aboutSection = document.getElementById(`aboutArea`);
    let statsSection = document.getElementById(`statsArea`);
    let genderSection = document.getElementById(`gendersArea`);
    let evoSection = document.getElementById(`evolutionsArea`);
    aboutSection.style.display =`none`;
    statsSection.style.display =`Block`;
    genderSection.style.display =`none`;
    evoSection.style.display =`none`;

}

function colorStats(){
    let markTab = document.getElementById(`statsTab`);
    let fristtTab = document.getElementById(`aboutTab`);
    let thirdTab = document.getElementById(`genderTab`);
    let fouthTab = document.getElementById(`evolutionsTab`);
    markTab.style.backgroundColor =`rgb(221, 220, 220)`;
    fristtTab.style.backgroundColor =`white`;
    thirdTab.style.backgroundColor =`white`;
    fouthTab.style.backgroundColor =`white`;
}

function displayGenders() {
    colorGenders();
    let aboutSection = document.getElementById(`aboutArea`);
    let statsSection = document.getElementById(`statsArea`);
    let genderSection = document.getElementById(`gendersArea`);
    let evoSection = document.getElementById(`evolutionsArea`);
    aboutSection.style.display =`none`;
    statsSection.style.display =`none`;
    genderSection.style.display =`Block`;
    evoSection.style.display =`none`;

}

function colorGenders(){
    let markTab = document.getElementById(`genderTab`);
    let fristtTab = document.getElementById(`aboutTab`);
    let thirdTab = document.getElementById(`statsTab`);
    let fouthTab = document.getElementById(`evolutionsTab`);
    markTab.style.backgroundColor =`rgb(221, 220, 220)`;
    fristtTab.style.backgroundColor =`white`;
    thirdTab.style.backgroundColor =`white`;
    fouthTab.style.backgroundColor =`white`;
}

function displayEvolutions() {
    colorEvolutions();
    let aboutSection = document.getElementById(`aboutArea`);
    let statsSection = document.getElementById(`statsArea`);
    let genderSection = document.getElementById(`gendersArea`);
    let evoSection = document.getElementById(`evolutionsArea`);
    aboutSection.style.display =`none`;
    statsSection.style.display =`none`;
    genderSection.style.display =`none`;
    evoSection.style.display =`Block`;

}

function colorEvolutions(){
    let markTab = document.getElementById(`evolutionsTab`);
    let fristtTab = document.getElementById(`aboutTab`);
    let thirdTab = document.getElementById(`genderTab`);
    let fouthTab = document.getElementById(`statsTab`);
    markTab.style.backgroundColor =`rgb(221, 220, 220)`;
    fristtTab.style.backgroundColor =`white`;
    thirdTab.style.backgroundColor =`white`;
    fouthTab.style.backgroundColor =`white`;
}