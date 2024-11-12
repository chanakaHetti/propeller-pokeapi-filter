import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePokemonTypes = () => {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTypes = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const fetchedTypes = response.data.results.map(
          (type: { name: string }) => type.name
        );
        setTypes(fetchedTypes);
        setError(null);
      } catch (error) {
        setError('Error fetching types');
        console.error('Error fetching types:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTypes();
  }, []);

  return { types, loading, error };
};
