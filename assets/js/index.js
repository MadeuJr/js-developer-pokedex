const pokemonDisplay = document.getElementById('pokemons');
const loadButton = document.getElementById('loadbutton');
const limit = 10;
var offset = 0;
const maxItens = 151;

function createPokemonElement(pokemon) {
    return `
            <li class="${pokemon.type}">
                <div class="info">
                    <span class="name">
                        ${pokemon.name}
                    </span>
                    <span class="identifier">
                        ${pokemon.identifier}
                    </span>
                </div>
                <div class="details">
                    <ul class="types">
                        ${pokemon.types
                            .map(
                                (type) =>
                                    `<li class="type ${type}">${type}</li>`
                            )
                            .join('')}
                    </ul>
                    <img src="${pokemon.imageSource}" alt="Pokemon ${
        pokemon.name
    }">  
                </div>
            </li>
            `;
}

function loadPokemonItens(inOffset, inLimit) {
    PokeAPI.getPokemons(inOffset, inLimit).then((pokemons = []) => {
        const newHtml = pokemons.map(createPokemonElement).join('');
        pokemonDisplay.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit);

loadButton.addEventListener('click', () => {
    offset += limit;
    const nextPage = offset + limit;
    if (nextPage >= maxItens) {
        const newLimit = maxItens - offset;
        loadPokemonItens(offset, newLimit);
        loadButton.parentElement.removeChild(loadButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});
