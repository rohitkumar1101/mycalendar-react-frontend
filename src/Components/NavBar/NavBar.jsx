import React from 'react'
import calendar_icon from '../../Images/calendar.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={calendar_icon} width="30" className="d-inline-block align-top" alt="calendar" />
                <span> My Tasks </span>
            </a>
            </nav>
        </div>
    )
}

export default NavBar
