const PatternPokemon = {}

PatternPokemon.addPokemon = (pokemonList) => {
    const pokemons = [] ;
    pokemonList.forEach((pokemon => {
        const pokemonHTML = `
            <li class="${pokemon.type[0]}">
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
                        <li class="${pokemon.types[0]}">${pokemon.types[0]}</li>
                        <li class="${pokemon.types[1]}">${pokemon.types[1]}</li>
                    </ul>
                    <img src="${pokemon.imageSource}" alt="Pokemon ${pokemon.name}">  
                </div>
            </li>
            `
        pokemons.push(pokemonHTML);
        }));
    return pokemons;   
}