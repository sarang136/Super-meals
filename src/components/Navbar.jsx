import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserConText from '../Utils/UserContext'


const Navbar = () => {

    const { loggedInUser } = useContext(UserConText) // pass the component name inside brackets/ useContext(---)  This is the syntax to destructure


    return (
        <div className='navbar-container'>
            <div className='logo'>
                <img src='https://images-platform.99static.com/ydocSZMPbCuCOxA5hNQLJLs10jY=/500x500/top/smart/99designs-contests-attachments/2/2478/attachment_2478256' />
            </div>
            <div className='anchors'>

                <Link>Offers</Link>
                <Link>Help</Link>
                <Link>Sign in</Link>
                <Link>Cart</Link>
                <p id='user'>{loggedInUser}</p>
                <div id="popup">Sarang Padulkar</div>
            </div>

        </div>
    )
}

export default Navbar;