import React, { Suspense } from 'react';
import PokemonContent from './components/PokemonContent';
import Loading from './components/common/Loading';

function Home() {
    return (
        <Suspense fallback={<Loading message={'Loading...'} />}>
            <PokemonContent />
        </Suspense>
    );
}

export default Home;
