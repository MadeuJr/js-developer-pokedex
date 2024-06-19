const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const PokeAPI = {};

function convertPokemon (pokemonDetails)  {
    const pokemon = new Pokemon;
    pokemon.convertToDetails(pokemonDetails);
    return pokemon;
}

PokeAPI.getPokemonsDetail =  (pokemon) => {
    return fetch(pokemon.url).then((results) => results.json())
    .then(convertPokemon)
    
}


PokeAPI.getPokemons = (offset, limit) => {
    return fetch(`${API_URL}?offset=${offset}&limit=${limit}`)
        .then((response) => response.json())
        .then((jsonResponse) => jsonResponse.results)
        .then((results) => results.map((pokemon) => PokeAPI.getPokemonsDetail(pokemon)))
        .then((pokemonsPromisses) => Promise.all(pokemonsPromisses))
        .then((results) => results);
};
