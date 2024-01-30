const GameOver = ({ winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{winner ? `Winner: ${winner}` : "It's a draw!"}</p>
      <p>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </p>
    </div>
  );
};

export default GameOver;
