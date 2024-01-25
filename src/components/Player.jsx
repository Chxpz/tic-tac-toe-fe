import { useState } from "react";

const Player = ({ intialName, symbol }) => {
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
    <li class="player" id="player1">
      <span className="player">
        {editablePlayerNamer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handlerIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
