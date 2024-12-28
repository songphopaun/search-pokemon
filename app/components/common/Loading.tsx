import React from 'react';

interface LoadingProps {
    message: string;
}

function Loading({ message }: LoadingProps) {
    return (
        <div className="text-center my-10">
            <h2 className="text-2xl font-bold text-gray-700">{message}</h2>
        </div>
    );
}

export default Loading;
