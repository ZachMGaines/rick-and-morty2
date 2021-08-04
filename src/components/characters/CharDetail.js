import React from 'react';
import PropTypes from 'prop-types';

const CharDetail = ({ name, species, status, image }) => (
  <div>
    <p>{name}</p>
    <p>{species}</p>
    <p>{status}</p>
    <img src={image} alt={name} />
  </div>
);
console.log('i am here');
CharDetail.propTypes = {
  names: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}.isRequired;

export default CharDetail;

