const pokemonDisplay = document.getElementById('pokemons');

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
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ul>
                    <img src="${pokemon.imageSource}" alt="Pokemon ${pokemon.name}">  
                </div>
            </li>
            `;
}

function loadPokemonItens() {
    PokeAPI.getPokemons(0, 15).then((pokemons = []) => {
        const newHtml = pokemons.map(createPokemonElement).join('')
        pokemonDisplay.innerHTML += newHtml
    })
}

loadPokemonItens()