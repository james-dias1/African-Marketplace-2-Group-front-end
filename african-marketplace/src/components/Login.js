import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

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
        axios.post('https://lbs-african-marketplace.herokuapp.com/auth/login', login)
            .then(resp => {
                localStorage.setItem('token', resp.data.token);
                push('/products');
            })
            .catch(err => {
                console.log(err);
            })
    }


    return(
        <div className="login-container">
            <div className="login-card">
                <h2>Login to use the marketplace!</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-inputs">
                        <label> Username:
                            <input 
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={login.username}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="login-inputs">
                        <label> Password:
                            <input 
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={login.password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button className="home-btn">Login</button>
                </form>
                <p className="special-p">Don't have an account?<Link className="link-1" to='/signup'>Sign up</Link></p>
            </div>
        </div>
    )
}

export default Login;