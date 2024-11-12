import { filterAndSortPokemon } from './pokemonUtils';
import { Pokemon } from '../types';

const pokemonList = [
  {
    name: 'Pikachu',
    id: 1,
    image: 'pikachu.png',
    types: ['electric'],
    height: 4,
    weight: 60,
    abilities: ['static', 'lightning-rod'],
    stats: [
      { name: 'hp', base: 35 },
      { name: 'attack', base: 55 },
    ],
  },
  {
    name: 'Charmander',
    id: 2,
    image: 'charmander.png',
    types: ['fire'],
    height: 6,
    weight: 85,
    abilities: ['blaze'],
    stats: [
      { name: 'hp', base: 39 },
      { name: 'attack', base: 52 },
    ],
  },
  {
    name: 'Squirtle',
    id: 3,
    image: 'squirtle.png',
    types: ['water'],
    height: 5,
    weight: 90,
    abilities: ['torrent'],
    stats: [
      { name: 'hp', base: 44 },
      { name: 'attack', base: 48 },
    ],
  },
];

describe('filterAndSortPokemon', () => {
  it('should filter Pokemon by name (case-insensitive)', () => {
    const result = filterAndSortPokemon(
      pokemonList as Pokemon[],
      'Pik',
      '',
      'asc'
    );
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Pikachu');
  });

  it('should filter Pokemon by selected type', () => {
    const result = filterAndSortPokemon(
      pokemonList as Pokemon[],
      '',
      'fire',
      'asc'
    );
    expect(result).toHaveLength(1);
    expect(result[0].types).toContain('fire');
    expect(result[0].name).toBe('Charmander');
  });

  it('should filter Pokemon by name and selected type', () => {
    const result = filterAndSortPokemon(
      pokemonList as Pokemon[],
      'Squirt',
      'water',
      'asc'
    );
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Squirtle');
    expect(result[0].types).toContain('water');
  });

  it('should sort Pokemon by name in ascending order', () => {
    const result = filterAndSortPokemon(
      pokemonList as Pokemon[],
      '',
      '',
      'asc'
    );
    expect(result[0].name).toBe('Charmander');
    expect(result[1].name).toBe('Pikachu');
    expect(result[2].name).toBe('Squirtle');
  });

  it('should sort Pokemon by name in descending order', () => {
    const result = filterAndSortPokemon(
      pokemonList as Pokemon[],
      '',
      '',
      'desc'
    );
    expect(result[0].name).toBe('Squirtle');
    expect(result[1].name).toBe('Pikachu');
    expect(result[2].name).toBe('Charmander');
  });

  it('should return an empty array if no Pokemon match the search term', () => {
    const result = filterAndSortPokemon(
      pokemonList as Pokemon[],
      'nonexistent',
      '',
      'asc'
    );
    expect(result).toHaveLength(0);
  });
});
