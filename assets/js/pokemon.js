class Pokemon {
    identifier;
    name;
    type;
    types = [];
    imageSource;

    convertToDetails(apiResponse) {
        this.identifier = apiResponse.id;
        this.name = apiResponse.name;
        const jsonTypes = apiResponse.types;
        this.types = jsonTypes.map((types) => types.type.name)
        this.type = this.types[0];
        this.imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.identifier}.png`
    }
}

