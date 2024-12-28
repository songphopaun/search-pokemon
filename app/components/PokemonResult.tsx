import React from 'react';
import Image from 'next/image';

import { Evolution, Pokemon, TypeColors } from '../types/pokemon';
import Badge from './common/Badge';
import Ball from '../../public/images/ball.png';

interface PokemonResultProps {
    pokemon: Pokemon;
    TYPE_COLORS: TypeColors;
    TYPE_COLORS_BG_CARD_RESULT: TypeColors;
    getTypeColor: (type: string, typeColors: TypeColors) => void;
    onSearch: (value: string) => void;
}

function PokemonResult({
    pokemon,
    TYPE_COLORS,
    TYPE_COLORS_BG_CARD_RESULT,
    getTypeColor,
    onSearch,
}: PokemonResultProps) {
    const bgClass = getTypeColor(pokemon.types[0], TYPE_COLORS_BG_CARD_RESULT);

    return (
        <div
            className={`relative border-2 border-gray-300  rounded-lg shadow-lg p-6 max-w-4xl mx-auto my-10 text-black ${bgClass}`}
        >
            <div className="absolute -bottom-24 -right-24 flex justify-center items-center">
                <Image
                    src={Ball}
                    alt="Pokemon Ball"
                    width={450}
                    height={450}
                    className="opacity-20"
                />
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-5">
                <Image
                    src={pokemon.image}
                    alt={pokemon.name}
                    width={200}
                    height={200}
                />
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold mb-2 ">{pokemon.name}</h1>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
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
            <div className="mt-5">
                <h1 className="text-2xl font-semibold mb-2">Attacks</h1>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className=" p-4">
                        <h3 className="text-xl font-medium mb-3">
                            Fast Attacks
                        </h3>
                        <div>
                            {pokemon.attacks.fast.map((attack, index) => (
                                <div
                                    key={attack.name}
                                    className={`p-3 ${
                                        index ===
                                        pokemon.attacks.fast.length - 1
                                            ? ''
                                            : 'border-b-2 border-gray-300'
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{attack.name}</span>
                                        <Badge
                                            type={attack.type}
                                            TYPE_COLORS={TYPE_COLORS}
                                        />
                                    </div>
                                    <span className="mt-1 text-sm text-gray-600">
                                        Damage: {attack.damage}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-3">
                            Special Attacks
                        </h3>
                        <div>
                            {pokemon.attacks.special.map((attack, index) => (
                                <div
                                    key={attack.name}
                                    className={`p-3 ${
                                        index ===
                                        pokemon.attacks.special.length - 1
                                            ? ''
                                            : 'border-b-2 border-gray-300'
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{attack.name}</span>
                                        <Badge
                                            type={attack.type}
                                            TYPE_COLORS={TYPE_COLORS}
                                        />
                                    </div>
                                    <span className="mt-1 text-sm text-gray-600">
                                        Damage: {attack.damage}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {pokemon.evolutions && pokemon.evolutions.length && (
                <div className="mt-5">
                    <h1 className="text-2xl font-semibold mb-2">Evolutions</h1>
                    <div className="flex space-x-5">
                        {pokemon?.evolutions.map(
                            (evo: Evolution, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="text-center cursor-pointer"
                                        onClick={() => onSearch(evo.name)}
                                    >
                                        <div className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 shadow-lg ">
                                            <Image
                                                src={evo.image}
                                                alt={evo.name || 'Pokemon'}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                        <span>{evo.name}</span>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PokemonResult;
