import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <p>COPYRIGHT &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
