import React from 'react';

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

export default Counter;