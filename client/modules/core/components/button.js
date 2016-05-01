import React from 'react'

const Button = ({number, inc}) => {
  return (
    <button
      onClick={inc}
    >
      <h1>{number}</h1>
    </button>
  )
}

export default Button
