import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';

// Hooks
import { usePokemon } from './hooks/usePokemon';
import { usePokemonTypes } from './hooks/usePokemonTypes';

// Components
import PokemonCard from './components/PokemonCard';
import PokemonModal from './components/PokemonModal';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import LoadMoreButton from './components/LoadMoreButton';

// Types
import { Pokemon } from './types';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [page, setPage] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const { filteredPokemon, loading, next } = usePokemon(
    page,
    searchTerm,
    selectedType,
    sortOrder
  );
  const { types, loading: typesLoading, error: typesError } = usePokemonTypes();

  const handleSearch = useCallback(
    debounce((value: string) => setSearchTerm(value), 300),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white">Pokemon List</h1>
      </header>

      <main className="max-w-4xl mx-auto mb-4 space-y-2">
        <div className="flex items-center space-x-4">
          <SearchBar onSearch={handleSearch} />
          {typesLoading ? (
            <p className="text-white">Loading types...</p>
          ) : typesError ? (
            <p className="text-red-500">{typesError}</p>
          ) : (
            <TypeFilter
              types={types}
              selectedType={selectedType}
              onChange={setSelectedType}
            />
          )}
        </div>
      </main>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => setSelectedPokemon(pokemon)}
          />
        ))}
      </section>

      <div className="flex justify-center items-center mt-8">
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-t-yellow-300 border-l-transparent border-r-white border-b-transparent" />
        ) : (
          next && <LoadMoreButton onClick={() => setPage((prev) => prev + 1)} />
        )}
      </div>

      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
};

export default App;
