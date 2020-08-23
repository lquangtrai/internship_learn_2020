import React from 'react';

import Counter from './Counter';

// function Player(props) {
//   return (
//     <div className="player">
//       <span className="player-name">
//         <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
//         {props.name}
//       </span>
//       <Counter
//         score={props.score}
//         index={props.index}
//         changeScore={props.changeScore}
//       />
//     </div>
//   );
// }

class Player extends React.PureComponent {
    render() {
          console.log(this.props.name + ' rendered');
          return (
            <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>X</button>
                {this.props.name}
              </span>
              <Counter
                score={this.props.score}
                index={this.props.index}
                changeScore={this.props.changeScore}
              />
            </div>
          );

    }
}

export default Player;
