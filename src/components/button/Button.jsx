import React from 'react'
import './button.css'

function Button(props) {
  return (
    <button type="submit" className="btn btn-qty">{props.text}</button>
  )
}

export default Button
