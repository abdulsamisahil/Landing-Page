import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__text">
                <div className="logo">
                    <h3 className='dinner'>SAHIL</h3>
                    <h3>RESTAURANT</h3>
                </div>
                <ul className='navbar__ul'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
