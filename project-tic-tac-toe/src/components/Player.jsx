import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleClick = () => {
    setIsEditing((editing) => !editing);
  }

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? <input required value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}

/** Note:
 *  React schedules state updates - so states do not update immediately.
 *  if we instead use a fn to update the state based on its current (old) state,
 *  the latest state can be passed to the following setState even if it runs in the same fn.
 *  the current state value is always automatically passed as an argument to a fn defined within setState.
 */