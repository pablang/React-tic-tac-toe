import React from 'react';
import './Game.css';
import Board from './Board.js'
import Avatar from './Avatar'

export default class Game extends React.Component {
  constructor(){
    super();
    let grid = [];
    let win = [];
    for(let i=0; i<3; i++){
      let row = Array(3).fill(null);
      grid.push(row);
      win.push(row.slice());
    }

    this.state = {
      history: [{
        squares: grid,
      }],
      stepNumber: 0,
      xIsNext: true,
      winGrid: win,
    };
  }

  handleClick(i,j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [];
    for(let k=0; k<3; k++){
      squares.push(current.squares[k].slice());
    }
    if(calculateWinner(squares) || squares[i][j]){
      return;
    }
    squares[i][j] = this.state.xIsNext ? 'X' : 'O';
    var winCoor = calculateWinner(squares);
    if(winCoor){
      // ie [[0,0], [1,1], [2,2]]
      let win = [];
      for(let m=0; m<3; m++){
        let row = Array(3).fill(null);
        win.push(row);
      }
      const c1 = winCoor[0];
      const c2 = winCoor[1];
      const c3 = winCoor[2];

      win[c1[0]][c1[1]] = 1;
      win[c2[0]][c2[1]] = 1;
      win[c3[0]][c3[1]] = 1;

      this.setState({winGrid: win});
    }

    this.setState({
      history : history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }


  renderAvatar(avatar) {

    return (
      <Avatar avatar={avatar}/>
    )
  }

  resetGame(step){

    let win = [];
    for(let m=0; m<3; m++){
      let row = Array(3).fill(null);
      win.push(row);
    }
    this.props.incrementGamesPlayed()
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  renderStatus(winner){
    if (winner) {

      return (
        <div className="status">
          <h3>The winner is </h3>
          {this.state.xIsNext ? this.renderAvatar(this.props.O) : this.renderAvatar(this.props.X)}
        </div>)
    } else {
      return (
        <div className="status">
          <h3>It's your turn</h3>
          {this.state.xIsNext ? this.renderAvatar(this.props.X) : this.renderAvatar(this.props.O)}
        </div>
      )
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    return (
      <div className="game">
        <div className="game-board">

          <div className="game-info">
            {this.renderStatus(winner)}
          </div>
          <Board
            squares={current.squares}
            onClick={(i,j) => this.handleClick(i,j)}
            avatarX={this.props.X}
            avatarO={this.props.O}
            win={this.state.winGrid}
          />
        </div>
        <button className="reset" onClick={() => this.resetGame(0)}>Play Again!</button>
      </div>
    );
  }
}

function calculateWinner(squares) {

  // check row
  for (let i = 0; i < 3; i++) {
    if (squares[i][0] && squares[i][0] === squares[i][1] && squares[i][0] === squares[i][2]) {
      return [[i, 0], [i, 1], [i, 2]]
    }
  }

  // check column
  for (let j = 0; j < 3; j++) {
    if (squares[0][j] && squares[0][j] === squares[1][j] && squares[0][j] === squares[2][j]) {
      return [[0, j], [1, j], [2, j]];
    }
  }

  // check diagonals
  if (squares[0][0] && squares[0][0] === squares[1][1] && squares[0][0] === squares[2][2]) {
      return [[0, 0], [1, 1], [2, 2]];
  }

  if (squares[2][0] && squares[2][0] === squares[1][1] && squares[2][0] === squares[0][2]) {
      return [[2, 0], [1, 1], [0, 2]];
  }

  return null;
}