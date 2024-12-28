'use client';

import React, { useCallback, useMemo, memo } from 'react';
import Image from 'next/image';
import Logo from '../../public/images/logo.webp';
import Ball from '../../public/images/ball.png';
import Energy from '../../public/images/energy.webp';

import { Evolution, Pokemon, TypeColors } from '@/app/types/pokemon';
import Badge from './common/Badge';

interface PokemonBannerProps {
    pokemon: Pokemon | undefined;
    TYPE_COLORS: TypeColors;
}

const WaveAnimations = memo(() => (
    <>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[url('/images/wave.png')] bg-[length:1000px_100px] animate-wave1 opacity-100" />
        <div className="absolute bottom-2 left-0 w-full h-24 bg-[url('/images/wave.png')] bg-[length:1000px_100px] animate-wave2 opacity-50" />
        <div className="absolute bottom-4 left-0 w-full h-24 bg-[url('/images/wave.png')] bg-[length:1000px_100px] animate-wave2 opacity-20" />
        <div className="absolute bottom-5 left-0 w-full h-24 bg-[url('/images/wave.png')] bg-[length:1000px_100px] animate-wave2 opacity-70" />
    </>
));

WaveAnimations.displayName = 'WaveAnimations';

const PokemonBanner = ({ pokemon, TYPE_COLORS }: PokemonBannerProps) => {
    const getBackgroundClass = useCallback(
        (types: string[] | undefined): string => {
            if (!types?.length) return 'from-gray-500 to-gray-700';

            const primaryType = types[0];
            const backgroundClasses = {
                Fire: 'from-red-500 to-red-700',
                Water: 'from-blue-500 to-blue-700',
                Grass: 'from-green-500 to-green-700',
                Electric: 'from-yellow-500 to-yellow-700',
            };

            return (
                backgroundClasses[
                    primaryType as keyof typeof backgroundClasses
                ] || 'from-gray-500 to-gray-700'
            );
        },
        []
    );

    const backgroundClass = useMemo(
        () => getBackgroundClass(pokemon?.types),
        [pokemon?.types, getBackgroundClass]
    );

    return (
        <section
            className={`relative w-full h-screen overflow-hidden text-white bg-gradient-to-b ${backgroundClass}`}
        >
            <WaveAnimations />
            <Image
                src={Ball}
                alt="Pokemon Ball"
                width={450}
                height={450}
                className="absolute opacity-5 -left-44 top-2/4"
            />
            <Image
                src={Energy}
                alt="Pokemon Ball"
                width={400}
                height={400}
                className="absolute opacity-5 -right-16 top-2/4"
            />

            <div className="flex justify-center">
                <Image
                    src={Logo}
                    alt="Logo"
                    width={350}
                    height={350}
                    priority
                />
            </div>

            <div className="relative container mx-auto flex flex-col-reverse lg:flex-row  px-6 lg:px-12 py-16">
                <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        {pokemon?.name}
                    </h1>

                    <div className="flex justify-center lg:justify-start gap-4 text-2xl">
                        {pokemon?.types.map((item) => (
                            <Badge
                                key={item}
                                type={item}
                                TYPE_COLORS={TYPE_COLORS}
                            />
                        ))}
                    </div>
                    {pokemon?.evolutions && (
                        <div className="flex  flex-col space-y-4 mt-6">
                            <div className="text-lg font-semibold">
                                Evolutions
                            </div>
                            <div className="flex flex-row space-x-4">
                                {pokemon?.evolutions.map(
                                    (evo: Evolution, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="text-center"
                                            >
                                                <div className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 shadow-lg ">
                                                    <Image
                                                        src={evo.image}
                                                        alt={
                                                            evo.name ||
                                                            'Pokemon'
                                                        }
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

                <div className="lg:w-1/2 flex justify-center lg:justify-end ">
                    {pokemon?.image && (
                        <Image
                            src={pokemon.image}
                            alt={pokemon.name || 'Pokemon'}
                            width={400}
                            height={400}
                            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] mix-blend-multiply"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default memo(PokemonBanner);
