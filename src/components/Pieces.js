import React from 'react';
import '../stylesheets/pieces.scss';
import '../stylesheets/leftPuzzle.scss';

const Pieces = (props) => {
  return (
    <li className='left-puzzle__piece'>
      <img className='piece__size' src={props.data.url} alt={`Pieza ${props.data.id}`} />
    </li>
  );
};

export default Pieces;
