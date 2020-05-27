import React from 'react';
import '../stylesheets/pieces.scss';
import '../stylesheets/leftPuzzle.scss';

const Piece = (props) => {
  const onDragOverHandler = (ev) => {
    console.log('onDragOverHandler');
    ev.preventDefault();
  };

  const onDropHandler = (ev) => {
    console.log('onDropHandler');
    console.log(ev.dataTransfer.getData('text/plain'));
    const pieceData = JSON.parse(ev.dataTransfer.getData('text/plain'));
    console.log(pieceData);

    props.setRightPuzzle([...props.pieces, pieceData]);
  };

  const onDragStartHandler = (ev) => {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text/plain', JSON.stringify(props.data));
  };

  return (
    <li className='left-puzzle__piece' draggable='true' onDragStart={onDragStartHandler} onDrop={onDropHandler} onDragOver={onDragOverHandler}>
      <img className='piece__size' src={props.data.url} alt={`Pieza ${props.data.id}`} />
    </li>
  );
};

export default Piece;
