import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handlerIsEditing = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handlerChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerNamer = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerNamer = (
      <input type="text" required value={playerName} onChange={handlerChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerNamer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handlerIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
