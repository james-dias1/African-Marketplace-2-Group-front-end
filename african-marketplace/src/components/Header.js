import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Header.css';

const Header = () => {
    return(
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Home</Link>
                {localStorage.getItem('token') && <Link className="link" to='/products'>Products</Link> }
            </div>
            <div className="right-links">
                <Link className="link" to='/signup'>Signup</Link>
                <Link className="link" to='/login'>Login</Link>
                {localStorage.getItem('token') && <Link className="link" to='/postitem'>Post New Item</Link> }
            </div>
        </nav>
    )
}

export default Header;