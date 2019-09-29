import React from 'react'
import './Avatar.css'

export default function Avatar(props) {
  return (
    <div className={props.avatar}
      onClick={() => {props.onClick()}}>
    </div>
  );
}