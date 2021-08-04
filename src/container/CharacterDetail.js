/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { fetchDetail } from '../services/detailAPI';
import CharDetail from '../components/characters/CharDetail';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  const { id } = useParams();

  useEffect(async () => {
    const fetched = await fetchDetail(id);

    setCharacter(fetched);
    setLoading(false);
  }, [id]);

  // eslint-disable-next-line keyword-spacing
  if (loading) return <h1>Loading...</h1>;
  return <CharDetail  {...character} />;
};


export default CharacterDetails;
