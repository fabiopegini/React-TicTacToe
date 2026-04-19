import { useState } from 'react'
import Cell from './board_parts/Cell'
import { checkWin } from '../utils/logic'

const Board = ({ turn, changeTurn, win, setWin, cells, setCells, setDraw }) => {
  const changeCell = (clickedCell) => {
    if (cells[clickedCell] !== null) return

    const value = turn === 'x' ? 'X' : 'O'

    const newCells = cells.map((cell, index) =>
      clickedCell === index ? value : cell,
    )

    if (!newCells.some((cell) => cell === null) && !win) return setDraw(true)

    setCells(newCells)

    if (checkWin(newCells)) return setWin(true)

    const newTurn = turn === 'x' ? 'o' : 'x'
    changeTurn(newTurn)
  }

  return (
    <main id="board">
      {cells.map((cell, index) => (
        <Cell key={index} content={cell} index={index} markCell={changeCell} />
      ))}
    </main>
  )
}

export default Board
