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
          score: 0,
          name: "Guil"
        },
        {
          id: 2,
          score: 0,
          name: "Guil"
        },
        {
          id: 3,
          score: 0,
          name: "Gui"
        },
        {
          id: 4,
          score: 0,
          name: "Gu"
        },
        {
          id: 5,
          score: 0,
          name: "G"
        }        
      ]
    };
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
        score: prevState.players[index].score += delta
    }));

    // safest approach
    // build a new objest based on the data from prevState, 
    // which update  a player's score state without mutating this.state
    // this.setState( prevState => {
    //   // New 'players' array - a copy of previous 'players' state
    //   const updatePlayers = { ...prevState.players };
    //   // A copy of the player object we are targeting 
    //   const updatePlayer = { ...updatePlayers[index] };

    //   // Update the target player's score
    //   updatePlayer.score += delta;
    //   // Update the 'players' array with the target player's latest score
    //   updatePlayers[index] = updatePlayer;

    //   // Update the 'players' state without mutating the original state
    //   return {
    //     players: updatePlayers
    //   };    
    // });
    console.log('index: ' + index, 'delta: ' + delta) ;
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        // filter: the process of looping through an array and including or excluding elements inside that array based on a condition.
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
  
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        )}
      </div>
    );
  }
}

export default App;