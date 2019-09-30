import React from 'react';
import Avatar from './Avatar'

export default class AvatarModal extends React.Component {

  state = {
    step: 1
  }

  renderAvatar(avatar, player){
    return (
      <Avatar avatar={avatar}
      onClick={() => {
        this.setState(prevState => ({ step: prevState.step + 1 }))
        this.props.setPlayer(avatar, player)
      }}
      />
    );
  }

  render() {
    return (
      this.state.step < 3 ?
      (<section className="choose-avatar">
        <h3>Choose an avatar for player {this.state.step}</h3>
        <div className="avatar-container">
          {this.renderAvatar('Duke', this.state.step)}
          {this.renderAvatar('Valentina', this.state.step)}
          {this.renderAvatar('Frankie', this.state.step)}
        </div>
      </section>) : ''
    )
  }
}
