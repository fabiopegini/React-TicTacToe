import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import WinScreen from './components/WinScreen'
import DrawScreen from './components/DrawScreen'

function App() {
  const [turn, setTurn] = useState('x')
  const [win, setWin] = useState(false)
  const [draw, setDraw] = useState(false)

  const initialCells = Array(9).fill(null)
  const [cells, setCells] = useState(initialCells)

  const resetGame = () => {
    setCells(initialCells)
    setTurn('x')
    setWin(false)
    setDraw(false)
  }

  return (
    <>
      {!win && !draw && (
        <>
          <header>
            <h1>Tic Tac Toe</h1>
          </header>
          <Board
            turn={turn}
            changeTurn={setTurn}
            win={win}
            setWin={setWin}
            cells={cells}
            setCells={setCells}
            setDraw={setDraw}
          />
          <div id="turn">Turn: {turn.toUpperCase()}</div>
        </>
      )}
      {win && !draw && <WinScreen turn={turn} resetGame={resetGame} />}
      {draw && !win && <DrawScreen resetGame={resetGame} />}
    </>
  )
}

export default App
