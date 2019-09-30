import React from 'react'
import Square from './Square'
import './Board.css'

export default class Board extends React.Component {

  renderSquare(i,j) {
    const avatar =
    this.props.squares[i][j] === 'X' ?
    this.props.avatarX + " roll-in-blurred-left" :
    this.props.squares[i][j] === 'O' ?
    this.props.avatarO + " roll-in-blurred-right" : ''
    debugger
    const animate = this.props.win[i][j] ? ' jello-vertical' : ''

    return (
      <Square
        avatar={avatar + animate}
        onClick={() => this.props.onClick(i,j)}
     />
    );
  }

  render() {
    var rows = [];
    for(var i=0; i<3; i++){
      var row = [];
      for(var j=0; j<3; j++){
        row.push(this.renderSquare(i, j));
      }
      rows.push(<div key={i} className="board-row"> {row} </div>);
    }

    return (
      <div className="board">
          {rows}

      </div>
    );
  }
}