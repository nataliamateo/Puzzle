import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import puzzle from '../services/puzzle.json';
import empty from '../services/empty.json';
import Board from './Board';

const App = () => {
  const [leftPuzzle, setLeftPuzzle] = useState(puzzle);
  const [rightPuzzle, setRightPuzzle] = useState(empty);
  const puzzleState = {
    left: {
      pieces: leftPuzzle,
      setter: setLeftPuzzle,
    },
    right: {
      pieces: rightPuzzle,
      setter: setRightPuzzle,
    },
  };

  const detectWin = () => {
    const win = [9, 8, 7, 6, 5, 4, 3, 1, 2];
    const pieceIds = rightPuzzle.map((piece) => piece.id);
    console.log(pieceIds);

    for (let i = 0; i < win.length; i++) {
      if (win[i] !== pieceIds[i]) {
        console.log('TRY AGAIN');
        return;
      }
    }

    console.log('has ganado');
  };

  useEffect(() => detectWin());

  return (
    <>
      <h1 className='title'>
        Mini-puzzle <i className='fas fa-puzzle-piece'></i>
      </h1>
      <div className='App'>
        <Board id='puzzle-1' pieces={leftPuzzle} puzzleState={puzzleState} />
        <Board id='puzzle-2' pretty={true} pieces={rightPuzzle} puzzleState={puzzleState} />
      </div>
    </>
  );
};

export default App;
