import { Pokemon } from '../types';
import { removeDuplicates } from './removeDuplicates';

describe('removeDuplicates', () => {
  it('removes duplicate Pokemon by id', () => {
    const pokemonList = [
      { id: 1, name: 'Bulbasaur' },
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Ivysaur' },
    ];
    const uniqueList = removeDuplicates(pokemonList as Pokemon[]);

    expect(uniqueList).toEqual([
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Ivysaur' },
    ]);
  });

  it('keep Pokemon list as it is there is no duplicates', () => {
    const pokemonList = [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Ivysaur' },
    ];
    const uniqueList = removeDuplicates(pokemonList as Pokemon[]);

    expect(uniqueList).toEqual([
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Ivysaur' },
    ]);
  });
});
