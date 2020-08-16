import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const players = [
  {
    id: 1,
    name: "Guil",
    score: 50
  },
  {
    id: 2,
    name: "Guil",
    score: 50
  },
  {
    id: 3,
    name: "Gui",
    score: 504
  },
  {
    id: 4,
    name: "Gu",
    score: 508
  },
  {
    id: 5,
    name: "G",
    score: 501
  }
];

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
    this.setState({
      score: this.state.score + 1
    });

  }

  decreasementScore() {
    this.setState({
      score: this.state.score - 1
    });
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

function App(props) {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={props.initialPlayer.length} 
      />

      {props.initialPlayer.map( player =>
        <Player
          name={player.name}
          score={player.score}
          key={player.id.toString()}
        />
      )}
    </div>
  );
}

ReactDOM.render( 
  <App initialPlayer={players} />,
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
