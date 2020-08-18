import React from 'react';

import Header from './Header';
import Player from './Player';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          id: 1,
          name: "Guil"
        },
        {
          id: 2,
          name: "Guil"
        },
        {
          id: 3,
          name: "Gui"
        },
        {
          id: 4,
          name: "Gu"
        },
        {
          id: 5,
          name: "G"
        }        
      ]
    };
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: this.state.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {this.state.players.map( player =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

export default App;