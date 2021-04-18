import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'
import { useLocation } from 'react-router-dom'


export const Header = ({title, onAdd, showForm}) => {
    const location = useLocation()
    return (
        <header className='header'>
           <h1>{title}</h1> 
           {/* Pass In Props */}
           {location.pathname === '/' && (<Button color={showForm ? 'red' : 'green'}  text = {showForm ? "Close" : "Add"} onClick={onAdd}/>)}
        </header>
    )
}
// Set default properties of this component
Header.defaultProps = {
    title:"Task Tracker"
}
// Declare prop types
Header.propTypes = {
    title: PropTypes.string
}
