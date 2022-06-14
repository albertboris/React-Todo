import React from 'react'
import { ReactPropTypes } from 'react'
import Buttons from './Buttons'



const Header = ({ title, onAdd, showAdd }) => {
  
  return (
    <header className='header'>
       <h1>{title}</h1>
       <Buttons color={showAdd ? 'blue' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
       
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.ReactPropTypes = {
    title: 'ReactPropTypes.string.isRequired',
}

export default Header