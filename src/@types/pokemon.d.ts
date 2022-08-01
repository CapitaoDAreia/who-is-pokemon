type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: PokemonTypes[];
  cry: string;
};

type PokemonTypes =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy";

type PokeApi = {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: PokemonTypes;
    };
  }>;
};

type User = {
  name: string;
  email: string;
  image: string;
  score: number;
};
