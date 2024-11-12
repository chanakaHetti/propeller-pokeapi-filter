import { Pokemon } from '../types';

export const filterAndSortPokemon = (
  pokemonList: Pokemon[],
  searchTerm: string,
  selectedType: string,
  sortOrder: string
): Pokemon[] => {
  let filtered = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedType) {
    filtered = filtered.filter((pokemon) =>
      pokemon.types.includes(selectedType)
    );
  }

  return filtered.sort((a, b) =>
    sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
};
