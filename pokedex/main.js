const pokemons = [];
const apiURL = "https://pokeapi.co/api/v2/";
const myApp = document.getElementById('app');
const modal = document.getElementById("poke-modal");
const modalContent = document.getElementById("poke-details");
const span = document.getElementById("close");
const pokemonsContainer = document.createElement('div');

const getServerData = async (endpoint) => {
    const response = await fetch(`${apiURL}${endpoint}`);
    
    if (response.ok) {
        return response.json();
    } else {
        throw Error(response.status);
    }
}

const showModal = async (e) => {
    modalContent.innerHTML = "";
    modal.style.display = "block";
    const pokeData = await getServerData(`pokemon/${e}`);

    const pokemonNameHTML = document.createElement('h2');
    const pokemonArtWorkHTML = document.createElement('img');
    const movesTitleHTML = document.createElement('h3');
    const pokemonMovesHTML = document.createElement('div');

    pokemonArtWorkHTML.classList.add('pokemon__artwork');

    pokemonNameHTML.innerText = pokeData.name.toUpperCase();
    pokemonArtWorkHTML.src = pokeData.sprites.other['official-artwork'].front_default;
    movesTitleHTML.innerText = "Movimientos";
    pokemonMovesHTML.append(movesTitleHTML, movesHTML(pokeData.moves));

    modalContent.append(pokemonNameHTML, pokemonArtWorkHTML, pokemonMovesHTML);
}

const movesHTML = (moves = []) => {
    const movesContainer = document.createElement('ul');
    const filteredMoves = moves.filter((move,index) => index <= 3 );
    filteredMoves.forEach(move => {
        const moveHTML = document.createElement('li');
        moveHTML.innerHTML = move.move.name.replaceAll('-',' ');
        movesContainer.append(moveHTML);
    });
    return movesContainer;
};

span.onclick = function() {
    modal.style.display = "none";
}

const createPokemonHtml = ({ name, sprite }) => {
    const pokemonContainer = document.createElement('div');
    pokemonContainer.id = name;
    pokemonContainer.setAttribute("onClick", "showModal(this.id)");
    pokemonContainer.classList.add('pokemon');

    const pokemonNameHTML = document.createElement('p');
    const pokemonImageHTML = document.createElement('img');

    pokemonImageHTML.classList.add('pokemon__image');
    pokemonImageHTML.alt = name;

    pokemonNameHTML.innerText = name.toUpperCase();
    pokemonImageHTML.src = sprite;

    pokemonContainer.append(pokemonNameHTML, pokemonImageHTML);
    return pokemonContainer;
};

const pokemonsHTML = (pokemons = []) => {
    pokemons.forEach(pokemon => {
        const pokemonHtml = createPokemonHtml(pokemon);
        pokemonsContainer.append(pokemonHtml);
    });
};

const init = async () => {
    try {
        pokemonsContainer.classList.add('pokemonsContainer');
        for (let i = 1; i <= 20; i++) {
            const data = await getServerData(`pokemon/${i}`);
            pokemons.push({
                name: data.name,
                sprite: data.sprites.front_default,
            });
        }   
        myApp.append(pokemonsContainer);
        pokemonsHTML(pokemons);
    } catch (e) {
        const error = document.createElement('p');
        error.innerText = `${e} - No fue posible obtener los productos`;
        myApp.append(error);
    }
};

init();