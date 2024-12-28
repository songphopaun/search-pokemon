import { Pokemon, TypeColors } from '@/app/types/pokemon';
import PokemonBanner from '../PokemonBanner';
import Search from '../common/Search';

interface CommonLayoutProps {
    pokemon?: Pokemon;
    searchTerm: string;
    onSearch: (value: string) => void;
    TYPE_COLORS: TypeColors;
}

export default function CommonLayout({
    pokemon,
    searchTerm,
    onSearch,
    TYPE_COLORS,
}: CommonLayoutProps) {
    return (
        <>
            <PokemonBanner pokemon={pokemon} TYPE_COLORS={TYPE_COLORS} />
            <div className="container mx-auto">
                <Search
                    value={searchTerm}
                    onSearch={onSearch}
                    placeholder="Search for a Pokemon..."
                />
            </div>
        </>
    );
}
