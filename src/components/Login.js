import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
 
function Login() {

    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
          .then(auth => {
              history.push('/');
              
          })
          .catch(error => alert(error.message));

    };

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
          .then(auth => {
             history.push('/');

          })
          .catch(error => alert(error.message));
    }


    return (
        <div className="login">
            <Link to="/">
                <img src="https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-2.png"
                     className="login__logo"
                     alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                       type="email" 
                       value={email} 
                       onChange={event => setEmail(event.target.value)} 
                    />
                    <h5>Password</h5>
                    <input 
                       type="password" 
                       value={password} 
                       onChange={event => setPassword(event.target.value)}
                    />
                    <button 
                       onClick={login}
                       className="login__signInButton" 
                       type="submit">
                       Sign In
                    </button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and  
                    Privacy Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;