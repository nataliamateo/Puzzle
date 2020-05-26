import React from 'react';
import '../stylesheets/App.scss';
import LeftPuzzle from './LeftPuzzle';
import RightPuzzle from './RightPuzzle';
import data from '../services/data.json';

const App = () => {
  // const [rightPuzzle, setRightPuzzle] = useState([]);
  // const [leftPuzzle, setLeftPuzzle] = useState([]);
  return (
    <div className='App'>
      <LeftPuzzle data={data} />
      <RightPuzzle data={data} />
    </div>
  );
};

export default App;
