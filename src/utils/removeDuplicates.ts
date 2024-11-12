import { Pokemon } from '../types';

export const removeDuplicates = (data: Pokemon[]): Pokemon[] => {
  const uniqueIds = new Set();
  return data.filter((pokemon) => {
    if (uniqueIds.has(pokemon.id)) {
      return false;
    } else {
      uniqueIds.add(pokemon.id);
      return true;
    }
  });
};
