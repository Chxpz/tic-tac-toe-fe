const Log = ({ turns }) => {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}-${turn.square.col}`}>
          <b>{turn.player}</b> selected square <b>{turn.square.row}</b> and{" "}
          <b>{turn.square.col}</b>
        </li>
      ))}
    </ol>
  );
};

export default Log;
