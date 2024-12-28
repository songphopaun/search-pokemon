import React from 'react';
import Image from 'next/image';

import { Pokemon, TypeColors } from '../types/pokemon';
import Badge from './common/Badge';
import Ball from '../../public/images/ball.png';

interface ListPokemonProps {
    pokemons: Pokemon[];
    TYPE_COLORS: TypeColors;
    TYPE_COLORS_BG_CARD: TypeColors;
    getTypeColor: (type: string, typeColors: TypeColors) => void;
    onSearch: (value: string) => void;
}

function ListPokemon({
    pokemons,
    TYPE_COLORS,
    TYPE_COLORS_BG_CARD,
    getTypeColor,
    onSearch,
}: ListPokemonProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mx-2">
            {pokemons.map((pokemon: Pokemon) => {
                const bgClass = getTypeColor(
                    pokemon.types[0],
                    TYPE_COLORS_BG_CARD
                );

                return (
                    <div
                        key={pokemon.id}
                        className="relative pt-12"
                        onClick={() => onSearch(pokemon.name)}
                    >
                        <div className="absolute inset-0 flex justify-center items-center">
                            <Image
                                src={Ball}
                                alt="Pokemon Ball"
                                width={450}
                                height={450}
                                className="opacity-20"
                            />
                        </div>
                        <div
                            className={`p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:shadow-lg transition-shadow ${bgClass}`}
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48">
                                <Image
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                    width={300}
                                    height={300}
                                    className="object-contain w-full h-full mix-blend-multiply"
                                />
                            </div>
                            <div className="mt-32 min-h-24">
                                <h3 className="text-lg font-semibold text-center text-black">
                                    {pokemon.name}
                                </h3>
                                <div className="flex flex-wrap gap-2 justify-center mt-2">
                                    {pokemon.types.map((item) => {
                                        return (
                                            <Badge
                                                key={item}
                                                type={item}
                                                TYPE_COLORS={TYPE_COLORS}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ListPokemon;
