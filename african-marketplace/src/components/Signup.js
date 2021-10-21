import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';


import axios from 'axios';

import '../CSS/Login.css';

const Signup = () => {

    const { push } = useHistory();

    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        department: ''
    })

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://lbs-african-marketplace.herokuapp.com/auth/register', newUser)
            .then(resp => {
                console.log(resp);
                push('/login');
            })
            .catch(err => {
                console.log(err);
            })
    }


    return(
        <div className="login-container">
            <div className="login-card">
                <h2>Sign up to use the marketplace!</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-inputs">
                        <label> Username:
                            <input 
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={newUser.username}
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
                                value={newUser.password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="login-inputs">
                        <label> Department:
                            <select name="department" onChange={handleChange}>
                                <option value="">---Select your role---</option>
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </label>
                    </div>
                    <button className="home-btn">Sign up</button>
                </form>
                <p className="special-p">Already have an account?<Link className="link-1" to='/login'>Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;