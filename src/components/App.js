import React, { useState } from 'react';
import '../stylesheets/App.scss';
import LeftPuzzle from './LeftPuzzle';
import RightPuzzle from './RightPuzzle';
import data from '../services/data.json';

const App = () => {
  const [leftPuzzle, setLeftPuzzle] = useState([]);
  const [rightPuzzle, setRightPuzzle] = useState([]);

  return (
    <div className='App'>
      <LeftPuzzle leftPuzzle={data} />
      <RightPuzzle />
    </div>
  );
};

export default App;
