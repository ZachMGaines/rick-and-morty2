import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Character = ({ name, species, status, image, id }) => (
  <Link to={`/character/${id}`}>
    <figure>
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{species}</p>
        <p>{status}</p>
      </figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
