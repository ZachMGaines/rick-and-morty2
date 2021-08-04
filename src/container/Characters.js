import React, { useEffect, useState } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/rickAndMortyAPI';

const RickandMortyCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
    setLoading(false);
  }, []);

  // eslint-disable-next-line keyword-spacing
  if (loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters} />;
};

export default RickandMortyCharacters;
