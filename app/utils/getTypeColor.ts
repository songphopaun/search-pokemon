import { TypeColors } from '../types/pokemon';

/**
 * Get the corresponding color for a given type
 * @param type - The type of the Pokémon
 * @param typeColors - An object containing type-color mappings
 * @returns The corresponding color or a default color
 */
export const getTypeColor = (type: string, typeColors: TypeColors): string => {
    if (type in typeColors) {
        return typeColors[type as keyof TypeColors];
    }
    return 'colors.gray.500';
};
