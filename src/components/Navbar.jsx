import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {


    return (
        <div className='navbar-container'>
            <div className='logo'>
                <img src='https://images-platform.99static.com/ydocSZMPbCuCOxA5hNQLJLs10jY=/500x500/top/smart/99designs-contests-attachments/2/2478/attachment_2478256'/> 
            </div>
            <div className='anchors'>
          
            <Link>Offers</Link>
            <Link>Help</Link>
            <Link>Sign in</Link>
            <Link>Cart</Link>
            </div>
        </div>
    )
}

export default Navbar;