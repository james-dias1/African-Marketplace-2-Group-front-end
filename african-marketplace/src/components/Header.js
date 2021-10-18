import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
            </div>
            <div>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    )
}

export default Header;