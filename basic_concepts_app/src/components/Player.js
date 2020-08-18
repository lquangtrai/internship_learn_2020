import React from 'react';

import Counter from './Counter';

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
        {props.name}
      </span>
      <Counter score={props.score} />
    </div>
  );
}

export default Player;
