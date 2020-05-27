import React, { useState } from 'react';
import '../stylesheets/App.scss';
import LeftPuzzle from './LeftPuzzle';
import RightPuzzle from './RightPuzzle';
import puzzle from '../services/puzzle.json';
import empty from '../services/empty.json';

const App = () => {
  const [leftPuzzle, setLeftPuzzle] = useState(puzzle);
  const [rightPuzzle, setRightPuzzle] = useState(empty);

  return (
    <div className='App'>
      <LeftPuzzle id='puzzle-1' leftPuzzle={leftPuzzle} setLeftPuzzle={setLeftPuzzle} setRightPuzzle={setRightPuzzle} />
      <RightPuzzle id='puzzle-2' pieces={rightPuzzle} setLeftPuzzle={setLeftPuzzle} setRightPuzzle={setRightPuzzle} />
    </div>
  );
};

export default App;
