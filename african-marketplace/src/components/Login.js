import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import '../CSS/Login.css';

const Login = () => {

    const { push } = useHistory();

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('fakeurl.com', login)
            .then(resp => {
                localStorage.setItem('token', resp.data.token);
                push('/products');
            })
            .catch(err => {
                console.log(err);
            })
    }


    return(
        <div>
            <h2> Login to use the marketplace! </h2>
            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input 
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={login.username}
                        onChange={handleChange}
                    />
                </label>
                <label> Password:
                    <input 
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={login.password}
                        onChange={handleChange}
                    />
                </label>
                <button className="home-btn">Login</button>
            </form>
        </div>
    )
}

export default Login;