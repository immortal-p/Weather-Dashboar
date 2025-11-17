import { useState } from "react";

interface SearchBarProprs {
    onSearch: (city: string) => void;
    isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProprs) {
    const [city, setCity] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(city.trim()) {
            onSearch(city);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              id="log"
              type="text"
              value={city}
              onFocus={(e) => e.target.select()}
              onChange={e => setCity(e.target.value)}
              placeholder="Enter ciry name..."
              className="flex-1 text-neutral-300 p-2 rounded-lg border-2 transition duration-300 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-indigo-500 duration-300 text-white rounded-lg hover:bg-indigo-600 disabled:bg-gray-400 disabled:cursos-not-allowed"
            >
                {isLoading ? 'Searching' : 'Search'}
            </button>
        </form>
    )
}