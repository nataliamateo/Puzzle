import React from 'react';
import '../stylesheets/pieces.scss';
import '../stylesheets/leftPuzzle.scss';

const DraggablePiece = (props) => {
  const onDragStartHandler = (ev) => {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text/plain', JSON.stringify(props.data));
  };

  return (
    <li className='left-puzzle__piece' draggable='true' onDragStart={onDragStartHandler}>
      <img className='piece__size' src={props.data.url} alt={`Pieza ${props.data.id}`} />
    </li>
  );
};

export default DraggablePiece;
