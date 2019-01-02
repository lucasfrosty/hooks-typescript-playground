import * as React from 'react';
import styled from 'styled-components';

import {Square} from './components';

const Board = styled.div`
  max-width: 270px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
  
const CentrallizedContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

enum Player {
  One = '1',
  Two = '2',
};
type Winner = Player | undefined;

export enum SquareContent {
  X = 'X',
  O = 'O',
  Empty = '',
}
export type Board = SquareContent[];

interface Lines {
  first: boolean;
  second: boolean;
  third?: boolean;
};

interface WinConditions {
  verticalLines: Lines,
  horizontalLines: Lines,
  diagonalLines: Lines,
};

function getWinnerFromContent(winnerContent: SquareContent): Winner {
  if (winnerContent === SquareContent.Empty) {
    return undefined;
  }

  return winnerContent === SquareContent.X ? Player.One : Player.Two;
}

function getWinnerFromBoard(board: Board): Player | undefined {
  let winnerContent: SquareContent = SquareContent.Empty;
  const winConditions: WinConditions = {
    diagonalLines: {
      first: board[0] === board[4] && board[4] === board[8],
      second: board[2] === board[4] && board[4] === board[6],
    },
    horizontalLines: {
      first: board[0] === board[1] && board[1] === board[2],
      second: board[3] === board[4] && board[4] === board[5],
      third: board[6] === board[7] && board[7] === board[8],
    },
    verticalLines: {
      first: board[0] === board[3] && board[3] === board[6],
      second: board[1] === board[4] && board[4] === board[7],
      third: board[2] === board[5] && board[5] === board[8],
    },
  };
  const {diagonalLines, horizontalLines, verticalLines} = winConditions;

  if (diagonalLines.first || diagonalLines.second || horizontalLines.second || verticalLines.second) {
    winnerContent = board[4];
  } else if (horizontalLines.first || verticalLines.third) {
    winnerContent = board[2];
  } else if (verticalLines.first || horizontalLines.third) {
    winnerContent = board[6];
  } else {
    return undefined;
  }

  return getWinnerFromContent(winnerContent);
}

function TicTacToe() {
  const [board, setBoard] = React.useState<Board>(Array(9).fill(SquareContent.Empty));
  const [turn, setTurn] = React.useState<Player>(Player.One);
  const [winner, setWinner] = React.useState<Winner>(undefined);

  const isPlayer1Turn = turn === Player.One;

  function onSquareClick(index: number) {
    const newBoard = [...board];

    if(!newBoard[index]) {
      newBoard[index] = isPlayer1Turn ? SquareContent.X : SquareContent.O;
      const newWinner = getWinnerFromBoard(newBoard);
      
      if (newWinner) {
        setWinner(newWinner);
      }

      setBoard(newBoard);
      setTurn(isPlayer1Turn ? Player.Two : Player.One);
    } else {
      alert("This cell was already marked, try again");
    }
  }

  const squaresMarkup: React.ReactNode[] = board.map((squareContent: SquareContent, index) => {
    const props = {
      border: {
        right: index === 0 || index === 1 || index === 3 || index === 4 || index === 6 || index === 7,
        top: index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8,
      },
      onClick: () => onSquareClick(index),
      squareContent,
    }

    return <Square key={index} {...props} />;
  });

  const titleMessage = <h2>{winner ? `Player ${winner} won!!` : `Player ${turn} turn!!`}</h2>

  return (
    <CentrallizedContainer>
      <h2>{titleMessage}</h2>
      <Board>
        {squaresMarkup}
      </Board>
    </CentrallizedContainer>
  );
}

export default TicTacToe;
