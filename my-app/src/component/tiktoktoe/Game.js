import React, { useState } from "react";
import { caculatorWinner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";

const Game = () => {
  {
    /* Array(number).fill(value) -> [number phan tu voi value] */
  }

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  //useReducer
  let initialState = {
    board: Array(9).fill(null),
    xIsNext: true,

  }


  const winner = caculatorWinner(state.board);
  const hanldeClick = (index) => {
    let boardCoppy = [...state.board];
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = state.xIsNext ? "X" : "O";

    // setBoard(boardCoppy);
    // setXIsNext(!state.xIsNext);
    setState({
      ...state,
      board: boardCoppy,
      xIsNext: !state.xIsNext,
    });
  };

  let handlerResetGame = () => {
    setState({
      ...state,
      board: Array(9).fill(null)
    })
  };

  return (
    <div>
      <Board cells={state.board} onClick={hanldeClick}></Board>
      <button className="game-reset" type="button" onClick={handlerResetGame}>
        Reset Game
      </button>
      <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
    </div>
  );
};

export default Game;
