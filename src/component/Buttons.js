import React from 'react'
import { ReactPropTypes } from 'react'


const Buttons = ({ color,text,onClick }) => {



  return (
    <button
    onClick={onClick}
    style={{backgroundColor: color}} 
    className='btn'>{text}</button>
  )
}

Buttons.defaultProps = {
    color: 'steelblue'
}
Buttons.ReactPropTypes = {
    text: 'ReactPropTypes.string',
    color: 'ReactPropTypes.string',
    onclick: 'ReactPropTypes.func',
}

export default Buttons