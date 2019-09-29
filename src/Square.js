import React from 'react'
import './App.css'
import Avatar from './Avatar'

export default function Square(props) {
  return (
    <div className="square"
      onClick={() => {props.onClick();
      }}>
        {props.avatar ?
          <Avatar avatar={props.avatar} /> : ''
        }
    </div>
  );
}
