import React from 'react';
interface SearchProps {
    value: string;
    onSearch: (value: string) => void;
    placeholder?: string;
}

function Search({ value, onSearch, placeholder }: SearchProps) {
    return (
        <div className="relative m-4">
            <input
                type="text"
                placeholder={placeholder || 'Search Pokemon...'}
                value={value}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full text-black p-3 border-2 border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-700"
            />
            {value && (
                <button
                    onClick={() => onSearch('')}
                    className="absolute right-3 top-1/4 text-gray-500 hover:text-gray-700"
                >
                    ×
                </button>
            )}
        </div>
    );
}

export default Search;
