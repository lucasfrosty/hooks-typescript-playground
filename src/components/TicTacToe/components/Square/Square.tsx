import * as React from 'react';
import styled from 'styled-components';
import { SquareContent } from '../../TicTacToe';

function renderBorder(border?: boolean) {
  return border ? '2px solid #000' : 0;
}

const Container = styled.button`
  min-width: 90px;
  min-height: 90px;
  display: flex;
  border-top: ${({border}: Props) => renderBorder(border.top)};
  border-right: ${({border}: Props) => renderBorder(border.right)};
  border-bottom: ${({border}: Props) => renderBorder(border.bottom)};
  border-left: ${({border}: Props) => renderBorder(border.left)};
  box-sizing: border-box;
  outline: none;
  cursor: pointer;

  span {
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 50px;
  }
`;

interface Props {
  border: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
  },
  squareContent?: SquareContent;
  onClick(): void;
}

function Square({onClick, border, squareContent}: Props) {
  return (
    <Container border={border} onClick={onClick}>
      <span>{squareContent}</span>
    </Container>
  );
}

export default Square;
