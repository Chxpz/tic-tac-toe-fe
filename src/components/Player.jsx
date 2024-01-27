import { useState } from "react";

const Player = ({ intialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(intialName);

  const handlerIsEditing = () => {
    setIsEditing((editing) => !editing);
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
