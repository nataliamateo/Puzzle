import React from 'react';
import '../stylesheets/pieces.scss';

const Pieces = (props) => {
  return (
    <>
      <img className='piece__size' src={props.data.url} alt={`Pieza ${props.data.id}`} />
    </>
  );
};

export default Pieces;
