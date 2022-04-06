import React from 'react';
import { useHistory } from 'react-router-dom';

import '../CSS/Home.css';

const Home = () => {

    const { push } = useHistory();

    const handleClick = () => {
        push('/login');
    }

    const handleSignup = () => {
        push('/signup');
    }
    
    return(
        <div className="home-div">
            <h1>African Marketplace</h1>
            <div className="btn-div">
                <button className="home-btn" onClick={handleClick}>Login</button>
                <button className="home-btn" onClick={handleSignup}>Signup</button>
            </div>
        </div>
    )
}

export default Home;