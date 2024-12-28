'use client';

import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './client';

interface ApolloWrapperProps {
    children: ReactNode;
}

function ApolloWrapper({ children }: ApolloWrapperProps) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloWrapper;
