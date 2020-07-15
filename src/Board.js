import React, { useState } from "react";
import Cell from "./Cell";
import './Board.css';

const Board = ({ nrows, ncols, chanceLightStartsOn }) => {
  const createBoard = () => {
    let board = []
    for (let i = 0; i < nrows; i++) {
      let row = []
      for (let j = 0; j < ncols; j++) {
        row.push(Math.random() < chanceLightStartsOn)
      }
      board.push(row)
    }
    return board
  }

  const [board, setBoard] = useState(createBoard())
  const [hasWon, setHasWon] = useState(false)


  const flipCellsAround = (coord) => {
    console.log(coord)
    let newBoard = board.slice()
    let [y, x] = coord.split("-").map(Number);


    const flipCell = (y, x) => {


      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        newBoard[y][x] = !newBoard[y][x];
      }
    }

    flipCell(y, x)
    flipCell(y + 1, x)
    flipCell(y - 1, x)
    flipCell(y, x + 1)
    flipCell(y, x - 1)

    setBoard(newBoard)

    for (let i = 0; i < nrows; i++) {
      if (!newBoard[i].every((n) => !n)) {
        setHasWon(false)
        return
      }
    }

    setHasWon(true)


  }



  let tblBoard = []
  for (let i = 0; i < nrows; i++) {
    let row = []
    for (let j = 0; j < ncols; j++) {
      let coord = `${i}-${j}`
      row.push(<Cell key={coord} flipCellsAroundMe={() => flipCellsAround(coord)} isLit={board[i][j]} />)
    }
    tblBoard.push(<tr>{row}</tr>)
  }

  return (
    !hasWon
      ? <table className='Board'>
        <tbody>
          {tblBoard}
        </tbody>
      </table>
      : <h1> You won ! </h1>

  )

}


export default Board;
