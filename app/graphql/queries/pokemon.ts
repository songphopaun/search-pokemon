import { gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
    query getAllPokemons {
        pokemons(first: 151) {
            id
            name
            types
            image
            evolutions {
                id
                name
                image
            }
        }
    }
`;

export const GET_POKEMON = gql`
    query getPokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            image
            types
            attacks {
                fast {
                    name
                    type
                    damage
                }
                special {
                    name
                    type
                    damage
                }
            }
            evolutions {
                id
                name
                image
            }
        }
    }
`;
