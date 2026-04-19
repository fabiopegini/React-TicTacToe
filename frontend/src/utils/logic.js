export const checkWin = (currentCells) => {
  return (
    (currentCells[0] === currentCells[1] &&
      currentCells[1] === currentCells[2] &&
      currentCells[0] !== null) ||
    (currentCells[3] === currentCells[4] &&
      currentCells[4] === currentCells[5] &&
      currentCells[3] !== null) ||
    (currentCells[6] === currentCells[7] &&
      currentCells[7] === currentCells[8] &&
      currentCells[6] !== null) ||
    (currentCells[0] === currentCells[3] &&
      currentCells[3] === currentCells[6] &&
      currentCells[0] !== null) ||
    (currentCells[1] === currentCells[4] &&
      currentCells[4] === currentCells[7] &&
      currentCells[1] !== null) ||
    (currentCells[2] === currentCells[5] &&
      currentCells[5] === currentCells[8] &&
      currentCells[2] !== null) ||
    (currentCells[0] === currentCells[4] &&
      currentCells[4] === currentCells[8] &&
      currentCells[0] !== null) ||
    (currentCells[2] === currentCells[4] &&
      currentCells[4] === currentCells[6] &&
      currentCells[2] !== null)
  )
}
