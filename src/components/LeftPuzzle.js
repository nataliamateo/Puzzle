import React from 'react';
import '../stylesheets/leftPuzzle.scss';
import Pieces from './Pieces';

const LeftPuzzle = (props) => {
  const items = props.leftPuzzle.map((data) => <Pieces key={data.id} data={data} />);
  return <ul className='left-puzzle'>{items}</ul>;
};

export default LeftPuzzle;
