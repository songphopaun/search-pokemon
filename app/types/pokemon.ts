export interface Pokemon {
    id: string;
    name: string;
    image: string;
    types: string[];
    attacks: {
        fast: Attack[];
        special: Attack[];
    };
    evolutions: Evolution[];
}

interface Attack {
    name: string;
    type: string;
    damage: number;
}

export interface Evolution {
    id: string;
    name: string;
    image: string;
}

export interface GetAllPokemonsResponse {
    pokemons: Pokemon[];
}

export interface TypeColors {
    Fire: string;
    Water: string;
    Grass: string;
    Electric: string;
    Ice: string;
    Fighting: string;
    Poison: string;
    Ground: string;
    Flying: string;
    Psychic: string;
    Bug: string;
    Rock: string;
    Ghost: string;
    Dragon: string;
    Dark: string;
    Steel: string;
    Fairy: string;
    Normal: string;
}
