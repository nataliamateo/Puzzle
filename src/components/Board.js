import React from 'react';
import '../stylesheets/board.scss';
import Piece from './Piece';

const Board = (props) => {
  const items = props.pieces.map((data) => <Piece data={data} key={data.id} puzzleState={props.puzzleState} />);

  return <ul className={props.pretty ? 'board pretty' : 'board'}>{items}</ul>;
};

export default Board;
