import React from 'react';
import { useHistory } from 'react-router-dom';

import '../CSS/Home.css';

const Home = () => {

    const { push } = useHistory();

    const handleClick = () => {
        push('/login');
    }

    
    return(
        <div className="home-div">
            <h1>African Marketplace</h1>
            <button className="home-btn" onClick={handleClick}>Login</button>
        </div>
    )
}

export default Home;