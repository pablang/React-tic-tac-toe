import React from 'react'
import './index.css';
import './Avatar.css'

export default function Avatar(props) {
  const {avatar} = props

  return (
    <div className={avatar}></div>
  );
}