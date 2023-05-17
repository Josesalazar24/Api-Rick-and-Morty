export interface RickAndMortyCharacter {
  name: string;
  status: string;
  id: number;
  gender: string;
  species: string;
  image: string;
}

export const apiRoute =
  "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12";
