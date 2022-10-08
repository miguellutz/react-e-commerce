import React from 'react'
import './button.css'

function Button(props) {
  console.log(props.onClick)
  console.log(props.item)
  return (
    <button type="submit" className={props.class} onClick={() => props.onClick(props.item)}>{props.text}</button>
  )
}

export default Button
