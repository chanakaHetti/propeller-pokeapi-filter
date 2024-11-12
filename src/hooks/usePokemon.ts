import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { removeDuplicates } from '../utils/removeDuplicates';
import { Pokemon } from '../types';

export const usePokemon = (
  page: number,
  searchTerm: string,
  selectedType: string,
  sortOrder: string
) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [next, setNext] = useState<string | null>(null);

  const fetchPokemon = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    try {
      const offset = page * 20;
      const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`;
      const response = await axios.get(url);

      // Fetch detailed information for each Pokemon
      const newPokemon = await Promise.all(
        response.data.results.map(
          async (pokemon: { url: string; name: string }) => {
            const details = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              id: details.data.id,
              image: details.data.sprites.front_default,
              types: details.data.types.map(
                (typeInfo: { type: { name: string } }) => typeInfo.type.name
              ),
              height: details.data.height,
              weight: details.data.weight,
              abilities: details.data.abilities.map(
                (ab: { ability: { name: string } }) => ab.ability.name
              ),
              stats: details.data.stats.map(
                (st: { stat: { name: string }; base_stat: string }) => ({
                  name: st.stat.name,
                  base: st.base_stat,
                })
              ),
            };
          }
        )
      );

      const uniquePokemon = removeDuplicates([...pokemonList, ...newPokemon]);
      setPokemonList(uniquePokemon);
      setNext(response.data.next);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  useEffect(() => {
    let filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.includes(selectedType)
      );
    }

    filtered.sort((a, b) =>
      sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setFilteredPokemon(filtered);
  }, [searchTerm, selectedType, sortOrder, pokemonList]);

  return { filteredPokemon, loading, next };
};
