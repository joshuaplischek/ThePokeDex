function renderMiniCradsTemplate(i) {
    return/*html*/`
        <div onclick="openPokemonOverlay(${i})" class="miniPokeCard pokemon-card" id="miniPokeCard${i}">
            <div class="pokemonIds" id="pokemonContainerId${i}"></div>
            <div class="pokemon-name" id="pokemonName${i}"></div>
            <div class="type-image-container">
                <div class="pokemon-types">
                    <div id="pokemonType${i}"></div>
                </div>
                <div class="poke-image" id="pokemonImg${i}"></div>
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
            <img src="./assets/img/pokemon-colored.png" alt="">
            <p>${id}</p>
        </div>
    `
}

function renderTypes(type, i, indeyType) {
    return/*html*/`
        <div id="typeContainer${i}-${indeyType}" class="single-type-cart">
            <p>${type}</p>
        </div>
    `
}

function renderPic(png) {
    return/*html*/`
        <img src="${png}" alt="">
    `
}

function infoCardTemplate(i){
    const leftDisabled = i <= 0 ? 'disabled' : '';
    const rightDisabled = i >= totalPokemonCount - 1 ? 'disabled' : '';
    return/*html*/`
        <div class="pokemon-info-container" id="pokeInfoCard" onclick="cannotClickThePopUp(event)">
            <div class="pokemon">  <!-- oberer Container mit Bild, typ und name plus id -->
                <div id ="nameAndTypeContainer"></div> <!-- Name und Id -->
                <div> <!--Container mit typen und Gif -->
                    <div id="pokemonInfoType"></div> <!-- Typen-->
                    <div id="pokemonGif"></div> <!-- GIF-->
                </div>
            </div>
            <div class="info-area"> <!-- unterer Container-->
                <div class="tabs"><!-- Reiter der Katrgorien -->
                    <div id="aboutTab" onclick="displayAbout()" class="single-tab"><p>Über</p></div>
                    <div id="statsTab" onclick="displayStats()" class="single-tab"><p>Werte</p></div>
                    <div id="genderTab" onclick="displayGenders()" class="single-tab"><p>Geschlecht</p></div>
                </div>
                <div> <!-- Stats bzw Infos -->
                    <div id="aboutArea"></div>
                    <div id="statsArea"></div>
                    <div id="gendersArea"></div>
                </div>
                <div class="navigation-bar">
                    <img onclick="navigateInfo(${i - 1})" class="nav-button" ${leftDisabled} src="../assets/img/arrow-left.png" alt="">
                    <img onclick="navigateInfo(${i + 1})" class="nav-button" ${rightDisabled} src="../assets/img/arrow-right.png" alt="">
                </div>
            </div>
        </div>
    `
}

function renderInfoNameTemplate(name) {
    return/*html*/`
        <div class="info-name"><p>${name}</p></div>
    `
}

function renderInfoIdTemplate(id) {
    return/*html*/`
        <div class="pokemon-info-id info-id-conatiiner">
            <img src="./assets/img/pokemon-colored.png" alt="">
            <p>${id}</p>
        </div>
    `
}

function renderGifTemplate(gif){
    return/*html*/`
        <img src="${gif}" alt="">
    `
}

function renderInfoTypeTemplate(translated, indexType, i) {
    return/*html*/`
    <div id="typeInfoContainer${i}-${indexType}" class="single-info-type-cart">
        <p>${translated}</p></div>
    `
}

function renderStatsTemplate(germanStats, baseStats) {
    return/*html*/`
        <div class="stats-infos">
            <p>${germanStats}</p>
            <p>${baseStats}</p>
        </div>
    `
}

function renerAboutTemplate(i){
    return/*html*/`
    <div class="about-infos">
        <div><p>${i.name}</p></div>
        <div><p>${i.value}</p></div>
    </div>
    `
}

function renderGenderTemplate(f, m) {
    return/*html*/`
    <div class="gender-infos">
        <div class="gernder-percents">
            <p>Weiblich: ${f}%</p>
            <p>Männlich: ${m}%</p>
        </div>
        <div id="pie"></div>
    </div>
    `    
}

function renderNeutralGenderTemplate(){
    return/*html*/`
    <div class="gender-infos">
        <div class="gernder-percents">
            <p>Neutral</p>
        </div>
        <div id="pie"></div>
    </div>
    `    
}