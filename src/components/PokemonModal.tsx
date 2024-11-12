import React from 'react';
import { Pokemon } from '../types';

interface ModalProps {
  pokemon: Pokemon | null;
  onClose: () => void;
}

const PokemonModal = ({ pokemon, onClose }: ModalProps) => {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <article className="bg-white rounded-lg overflow-hidden shadow-lg w-96 sm:w-[500px] relative text-gray-800">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close Modal"
        >
          &times;
        </button>
        <header className="text-center p-4">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-2"
          />
          <h2 className="text-3xl font-bold capitalize">{pokemon.name}</h2>
          <p className="text-lg text-gray-500 capitalize mt-1">
            {pokemon.types.join(', ')}
          </p>
        </header>

        <section className="p-4">
          <h3 className="text-xl font-semibold mb-2">pokemon</h3>
          <ul className="grid grid-cols-2 gap-4 text-sm">
            <li>
              <span className="font-semibold">Height:</span>{' '}
              {pokemon.height / 10} m
            </li>
            <li>
              <span className="font-semibold">Weight:</span>{' '}
              {pokemon.weight / 10} kg
            </li>
            <li className="col-span-2">
              <span className="font-semibold">Abilities:</span>{' '}
              {pokemon.abilities?.map((ability, index) => (
                <span key={index} className="capitalize">
                  {ability}
                  {index < pokemon.abilities.length - 1 ? ', ' : ''}
                </span>
              ))}
            </li>
          </ul>
        </section>

        <section className="p-4">
          <h3 className="text-xl font-semibold mb-2">Base Stats</h3>
          <ul className="space-y-1 text-sm">
            {pokemon.stats?.map((stat, index) => (
              <li key={index} className="flex justify-between">
                <span className="capitalize">{stat.name}</span>
                <span>{stat.base}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
};

export default PokemonModal;
