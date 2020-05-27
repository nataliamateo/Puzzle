import React from 'react';
import '../stylesheets/leftPuzzle.scss';
import DraggablePiece from './DraggablePiece';

const LeftPuzzle = (props) => {
  const items = props.leftPuzzle.map((data) => <DraggablePiece key={data.id} data={data} />);
  return <ul className='left-puzzle'>{items}</ul>;
};

export default LeftPuzzle;
