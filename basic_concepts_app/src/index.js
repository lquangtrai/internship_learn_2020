import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats"> Player : {props.totalPlayers} </span>
    </header>
  );
}

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
        {props.name}
      </span>
      <Counter score={props.score}/>
    </div>
  );
}


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0
    };
    this.decreasementScore = this.decreasementScore.bind(this);
  }

  incrementScore() {
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      }
    });
  }

  decreasementScore() {
    this.setState(prevState => ({
      score: this.state.score - 1
    }));
  }

  render() {
    return (
      <div className="counter">
          <button className="counter-action decrement" onClick={this.decreasementScore}> - </button>
          <span className="counter-score"> {this.state.score} </span>
          <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
        </div>
    ); 
  }
} 

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

ReactDOM.render( 
  <App />,
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
