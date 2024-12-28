import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_BASE_URL,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    pokemons: {
                        merge(existing, incoming) {
                            return incoming;
                        },
                    },
                },
            },
        },
    }),
    connectToDevTools: process.env.NODE_ENV === 'development',
    defaultOptions: {
        query: {
            fetchPolicy: 'cache-first',
        },
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});

export default client;
