import React, { useState } from "react";
import "./styles.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

function checkWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const TicTacToeBoard = ({ xIsNext, squares, onPlay }) => {
  const winner = checkWinner(squares);
  let status;

  if (winner) {
    status = "Winner is : " + winner;
  } else if (squares.filter((item) => item == "").length < 1) {
    status = "Game over! Please start over.";
  } else {
    status = "Next player is : " + (xIsNext ? "X" : "O");
  }

  function handleClick(index) {
    if (squares[index] || checkWinner(squares)) return;
    const squaresCpy = [...squares];
    if (xIsNext) {
      squaresCpy[index] = "X";
    } else {
      squaresCpy[index] = "O";
    }
    onPlay(squaresCpy);
  }

  return (
    <div className="wrapper">
      <div className="tic-tac-toe-container">
        {squares.map((_, index) => (
          <Square
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
            key={index}
          />
        ))}
      </div>
      <h2>{status}</h2>
    </div>
  );
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start.";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game-board">
      <TicTacToeBoard
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
