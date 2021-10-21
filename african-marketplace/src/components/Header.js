import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Header.css';

const Header = () => {
    return(
        <nav className="nav-bar">
            <div className="left-links">
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to='/products'>Products</Link>
            </div>
            <div className="right-links">
                <Link className="AddItem" to='/additem'>Post New Item</Link>
                <Link className="link" to='/login'>Login</Link>
            </div>
        </nav>
    )
}

export default Header;