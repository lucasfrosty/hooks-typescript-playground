import * as React from 'react';
import styled from 'styled-components';

import {Square} from './components';

const Container = styled.div`
  max-width: 270px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

export type SquareContent = boolean | string;
enum Turn {
  Player1,
  Player2,
};

function TicTacToe() {
  const [board, setBoard] = React.useState<SquareContent[]>(Array(9).fill(false));
  const [turn, setTurn] = React.useState<Turn>(Turn.Player1);

  const isPlayer1Turn = turn === Turn.Player1;

  function onClick(index: number) {
    const newBoard = [...board];
    newBoard[index] = isPlayer1Turn ? 'X' : 'O';

    setBoard(newBoard);
    setTurn(isPlayer1Turn ? Turn.Player2 : Turn.Player1);
  }

  const squaresMarkup: React.ReactNode[] = board.map((squareContent: SquareContent, index) => {
    const props = {
      border: {
        right: index === 0 || index === 1 || index === 3 || index === 4 || index === 6 || index === 7,
        top: index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8,
      },
      onClick: () => onClick(index),
      squareContent,
    }

    return <Square key={index} {...props} />;
  });

  return (
    <Container>
      {squaresMarkup}
    </Container>
  );
}

export default TicTacToe;
