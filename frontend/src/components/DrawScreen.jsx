const DrawScreen = ({ resetGame }) => {
  return (
    <div id="draw">
      🤔 Draw 🤔
      <button onClick={() => resetGame()}>New game</button>
    </div>
  )
}

export default DrawScreen
