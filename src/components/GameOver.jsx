const GameOver = ({ winner, onRestartGame }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{winner ? `Winner: ${winner}` : "It's a draw!"}</p>
      <p>
        <button onClick={onRestartGame}>Play Again</button>
      </p>
    </div>
  );
};

export default GameOver;
