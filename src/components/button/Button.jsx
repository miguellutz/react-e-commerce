import React from 'react'
import './button.css'

function Button(props) {
  return (
    <button type="submit" className={props.class}>{props.text}</button>
  )
}

export default Button
