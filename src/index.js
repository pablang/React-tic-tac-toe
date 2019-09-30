import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './normalize.css';
import './skeleton.css';
// import Avatar from './Avatar'
import Game from './Game'
import AvatarModal from './AvatarModal'


class App extends React.Component {

  state = {
    p1: "",
    p2: ""
  }

  setPlayer = (avatar, player) => {
    if(player === 1) {
      this.setState({ p1: avatar})
    } else if(player === 2) {
      this.setState({ p2: avatar})
    }
  }

  render() {
    // console.log("render index")
    const {p1, p2} = this.state
    return (
      <div className="main-conatiner">
        <h1 className="center-text">TIC-TAC-TOE</h1>
        <AvatarModal setPlayer={this.setPlayer}/>

        {
          this.state.p1 !== '' && this.state.p2 !== '' ?
          <Game X={p1} O={p2} />
          : ''
        }
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
