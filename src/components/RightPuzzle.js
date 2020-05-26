import React from 'react';
import '../stylesheets/rightPuzzle.scss';
import Pieces from './Pieces';

const LeftPuzzle = (props) => {
  const items = props.data.map((data) => (
    <li key={data.id} className='right-puzzle__piece'>
      <Pieces data={data} />
    </li>
  ));
  return <ul className='right-puzzle'>{items}</ul>;
};

export default LeftPuzzle;
