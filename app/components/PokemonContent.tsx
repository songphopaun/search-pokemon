'use client';

import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useSearchParams, useRouter } from 'next/navigation';

import { GET_ALL_POKEMONS, GET_POKEMON } from '../graphql';
import { GetAllPokemonsResponse, Pokemon } from '../types/pokemon';

import Pokemons from './../components/Pokemons';
import CommonLayout from './../components/layout/CommonLayout';
import PokemonResult from './../components/PokemonResult';
import {
    TYPE_COLORS,
    TYPE_COLORS_BG_CARD,
    TYPE_COLORS_BG_CARD_RESULT,
} from '../constants/color';
import { getTypeColor } from '../utils/getTypeColor';
import useDebounce from '../hooks/useDebounce';
import Loading from './../components/common/Loading';

export default function PokemonContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [randomPokemon, setRandomPokemon] = useState<Pokemon | undefined>();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const { data: allPokemonsData, loading: allPokemonsLoading } =
        useQuery<GetAllPokemonsResponse>(GET_ALL_POKEMONS);

    const { data: pokemonData, loading: pokemonLoading } = useQuery(
        GET_POKEMON,
        {
            variables: { name: debouncedSearchTerm.toLowerCase() },
            skip: !debouncedSearchTerm,
        }
    );

    useEffect(() => {
        const searchQuery = searchParams.get('search');
        if (searchQuery) {
            setSearchTerm(searchQuery);
        }
    }, [searchParams]);

    const getRandomPokemon = useCallback(() => {
        if (allPokemonsData?.pokemons?.length) {
            const filteredPokemons = allPokemonsData.pokemons.filter(
                (pokemon) =>
                    pokemon.types.some((type) =>
                        ['Fire', 'Water', 'Grass', 'Electric'].includes(type)
                    )
            );

            if (filteredPokemons.length > 0) {
                const randomIndex = Math.floor(
                    Math.random() * filteredPokemons.length
                );
                setRandomPokemon(filteredPokemons[randomIndex]);
            }
        }
    }, [allPokemonsData]);

    useEffect(() => {
        getRandomPokemon();
    }, [getRandomPokemon]);

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        const query = value ? `?search=${encodeURIComponent(value)}` : '/';
        router.push(query, { scroll: false });
    };

    if (allPokemonsLoading) {
        return <Loading message={'Loading Pokemon...'} />;
    }

    return (
        <div className="min-h-screen">
            <CommonLayout
                pokemon={randomPokemon}
                searchTerm={searchTerm}
                onSearch={handleSearch}
                TYPE_COLORS={TYPE_COLORS}
            />
            <div className="container mx-auto">
                {pokemonData?.pokemon ? (
                    <PokemonResult
                        pokemon={pokemonData.pokemon}
                        TYPE_COLORS={TYPE_COLORS}
                        TYPE_COLORS_BG_CARD_RESULT={TYPE_COLORS_BG_CARD_RESULT}
                        getTypeColor={getTypeColor}
                        onSearch={handleSearch}
                    />
                ) : debouncedSearchTerm ? (
                    pokemonLoading ? (
                        <Loading message={'Loading Pokemon...'} />
                    ) : (
                        <div className="text-center my-10">
                            <h2 className="text-2xl font-bold text-gray-700">
                                No Pokemon Found
                            </h2>
                            <p className="text-gray-500 mt-2">
                                We couldn’t find any Pokemon with the name
                                &quot;
                                {debouncedSearchTerm}&quot;.
                            </p>
                        </div>
                    )
                ) : (
                    <Pokemons
                        pokemons={allPokemonsData?.pokemons || []}
                        TYPE_COLORS={TYPE_COLORS}
                        TYPE_COLORS_BG_CARD={TYPE_COLORS_BG_CARD}
                        getTypeColor={getTypeColor}
                        onSearch={handleSearch}
                    />
                )}
            </div>
        </div>
    );
}
