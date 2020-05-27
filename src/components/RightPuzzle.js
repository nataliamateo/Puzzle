import React from 'react';
import '../stylesheets/rightPuzzle.scss';
import Piece from './Piece';

const RigthPuzzle = (props) => {
  const items = props.pieces.map((data) => <Piece data={data} key={data.id} />);

  return <ul className='right-puzzle'>{items}</ul>;
};

export default RigthPuzzle;
