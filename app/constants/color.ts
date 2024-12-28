import { TypeColors } from '../types/pokemon';

export const TYPE_COLORS: TypeColors = {
    Fire: 'bg-red-500',
    Water: 'bg-blue-500',
    Grass: 'bg-green-500',
    Electric: 'bg-yellow-500',
    Ice: 'bg-blue-200',
    Fighting: 'bg-red-700',
    Poison: 'bg-purple-500',
    Ground: 'bg-yellow-700',
    Flying: 'bg-blue-300',
    Psychic: 'bg-pink-500',
    Bug: 'bg-green-600',
    Rock: 'bg-yellow-800',
    Ghost: 'bg-purple-700',
    Dragon: 'bg-indigo-700',
    Dark: 'bg-gray-700',
    Steel: 'bg-gray-400',
    Fairy: 'bg-pink-300',
    Normal: 'bg-gray-500',
} as const;

export const TYPE_COLORS_BG_CARD: TypeColors = {
    Fire: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.red.500),rgba(255,255,255,0))]',
    Water: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.blue.500),rgba(255,255,255,0))]',
    Grass: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.green.500),rgba(255,255,255,0))]',
    Electric:
        '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.yellow.500),rgba(255,255,255,0))]',
    Ice: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.blue.200),rgba(255,255,255,0))]',
    Fighting:
        '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.red.700),rgba(255,255,255,0))]',
    Poison: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.purple.500),rgba(255,255,255,0))]',
    Ground: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.yellow.700),rgba(255,255,255,0))]',
    Flying: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.blue.300),rgba(255,255,255,0))]',
    Psychic:
        '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.pink.500),rgba(255,255,255,0))]',
    Bug: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.green.600),rgba(255,255,255,0))]',
    Rock: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.yellow.800),rgba(255,255,255,0))]',
    Ghost: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.purple.700),rgba(255,255,255,0))]',
    Dragon: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.indigo.700),rgba(255,255,255,0))]',
    Dark: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.gray.700),rgba(255,255,255,0))]',
    Steel: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.gray.400),rgba(255,255,255,0))]',
    Fairy: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.pink.300),rgba(255,255,255,0))]',
    Normal: '[background-image:radial-gradient(80%_40%_at_50%_100%,theme(colors.gray.500),rgba(255,255,255,0))]',
} as const;

export const TYPE_COLORS_BG_CARD_RESULT: TypeColors = {
    Fire: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.red.500),rgba(255,255,255,0))]',
    Water: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.blue.500),rgba(255,255,255,0))]',
    Grass: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.green.500),rgba(255,255,255,0))]',
    Electric:
        '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.yellow.500),rgba(255,255,255,0))]',
    Ice: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.blue.200),rgba(255,255,255,0))]',
    Fighting:
        '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.red.700),rgba(255,255,255,0))]',
    Poison: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.purple.500),rgba(255,255,255,0))]',
    Ground: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.yellow.700),rgba(255,255,255,0))]',
    Flying: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.blue.300),rgba(255,255,255,0))]',
    Psychic:
        '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.pink.500),rgba(255,255,255,0))]',
    Bug: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.green.600),rgba(255,255,255,0))]',
    Rock: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.yellow.800),rgba(255,255,255,0))]',
    Ghost: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.purple.700),rgba(255,255,255,0))]',
    Dragon: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.indigo.700),rgba(255,255,255,0))]',
    Dark: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.gray.700),rgba(255,255,255,0))]',
    Steel: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.gray.400),rgba(255,255,255,0))]',
    Fairy: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.pink.300),rgba(255,255,255,0))]',
    Normal: '[background-image:radial-gradient(100%_80%_at_50%_100%,theme(colors.gray.500),rgba(255,255,255,0))]',
} as const;
