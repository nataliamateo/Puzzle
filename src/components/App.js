import React from 'react';
import '../stylesheets/App.scss';
import LeftPuzzle from './LeftPuzzle';
import Data from '../services/data.json';

function App() {
  return (
    <div className='App'>
      <LeftPuzzle />
    </div>
  );
}

export default App;
