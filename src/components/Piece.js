import React from 'react';
import '../stylesheets/piece.scss';

const Piece = (props) => {
  const onDragStartHandler = (ev) => {
    // ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('text/plain', JSON.stringify(props.data));
  };

  const onDragOverHandler = (ev) => {
    ev.preventDefault();
    return false;
  };

  const onDropHandler = (ev) => {
    const pieceData = JSON.parse(ev.dataTransfer.getData('text/plain'));

    swapPieces(pieceData, { ...props.data });
  };

  const swapPieces = (originPiece, destinationPiece) => {
    let originIndex = props.puzzleState.left.pieces.findIndex((leftPiece) => leftPiece.id === originPiece.id);
    let destinationIndex = props.puzzleState.left.pieces.findIndex((leftPiece) => leftPiece.id === destinationPiece.id);

    const bothLeft = originIndex !== -1 && destinationIndex !== -1;
    const bothRight = originIndex === -1 && destinationIndex === -1;
    // este caso cambia piezas que solo se encuentran en el board izq
    if (bothLeft) {
      const leftCopy = [...props.puzzleState.left.pieces];
      leftCopy[originIndex] = destinationPiece;
      leftCopy[destinationIndex] = originPiece;
      props.puzzleState.left.setter(leftCopy);
      // este caso cambia piezas que solo se encuentran en el board dcho
    } else if (bothRight) {
      // hay que volver a buscar el índice pero del tablero derecho
      originIndex = props.puzzleState.right.pieces.findIndex((rightPiece) => rightPiece.id === originPiece.id);
      destinationIndex = props.puzzleState.right.pieces.findIndex((rightPiece) => rightPiece.id === destinationPiece.id);
      console.log('ss2we', originIndex, destinationIndex);

      const rightCopy = [...props.puzzleState.right.pieces];
      rightCopy[originIndex] = destinationPiece;
      rightCopy[destinationIndex] = originPiece;
      props.puzzleState.right.setter(rightCopy);
      // este caso intercambia piezas entre el board izq y dcho
    } else {
      const leftIndex = props.puzzleState.left.pieces.findIndex((leftPiece) => leftPiece.id === originPiece.id);
      const rightIndex = props.puzzleState.right.pieces.findIndex((rightPiece) => rightPiece.id === destinationPiece.id);

      if (leftIndex === -1) {
        swapPieces(destinationPiece, originPiece);
        return;
      }

      const leftCopy = [...props.puzzleState.left.pieces];
      leftCopy[leftIndex] = destinationPiece;

      const rightCopy = [...props.puzzleState.right.pieces];
      rightCopy[rightIndex] = originPiece;

      props.puzzleState.left.setter(leftCopy);
      props.puzzleState.right.setter(rightCopy);
    }
  };

  return (
    <li className='piece' draggable='true' onDragStart={onDragStartHandler} onDrop={onDropHandler} onDragOver={onDragOverHandler}>
      <img className='piece__size' src={props.data.url} alt={`Pieza ${props.data.id}`} />
    </li>
  );
};

export default Piece;
