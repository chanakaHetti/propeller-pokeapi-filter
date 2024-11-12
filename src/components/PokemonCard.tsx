import React from 'react';
import { Pokemon } from '../types';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: () => void;
}

const PokemonCard = ({ pokemon, onClick }: PokemonCardProps) => {
  return (
    <div
      className="bg-white text-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-2xl transition transform hover:-translate-y-1"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${pokemon.name}`}
    >
      <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24" />
      <h2 className="mt-2 text-lg font-semibold capitalize">{pokemon.name}</h2>
      <p className="text-xs text-gray-500">{pokemon.types.join(', ')}</p>
    </div>
  );
};

export default PokemonCard;
