const WinScreen = ({ turn, resetGame }) => {
  return (
    <div id="win">
      🎉 Player {turn.toUpperCase()} wins! 🎉 Congratulations!
      <button onClick={() => resetGame()}>New game</button>
    </div>
  )
}

export default WinScreen
