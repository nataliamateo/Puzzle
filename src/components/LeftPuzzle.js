import React from 'react';
import '../stylesheets/leftPuzzle.scss';
import Pieces from './Pieces';

const LeftPuzzle = (props) => {
  const items = props.data.map((data) => (
    <li key={data.id} className='left-puzzle__piece'>
      <Pieces data={data} />
    </li>
  ));
  return <ul className='left-puzzle'>{items}</ul>;
};

export default LeftPuzzle;
