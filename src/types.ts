export interface Pokemon {
  name: string;
  url: string;
  id: number;
  image: string;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
  stats: { name: string; base: number }[];
}
