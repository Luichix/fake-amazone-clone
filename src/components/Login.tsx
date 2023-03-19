import React, { useState } from 'react';
import './Login.css';
import { Link, useRoutes } from 'react-router-dom';
import { auth } from '../services/firebase';

function Login() {
  // const history = useRoutes();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event: any) => {
    event.preventDefault();

    // auth;
    // .signInWithEmailAndPassword(email, password)
    // .then((auth: any) => {
    // history.push('/');
    // })
    // .catch((error: any) => alert(error.message));
  };

  const register = (event: React.ReactEventHandler) => {
    // e.preventDefault();
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     // it successfully created a new user with email and password
    //     console.log(auth);
    //     if (auth) {
    //       history.push('/');
    //     }
    //   })
    //   .catch((error) => alert(error.message));
    // do some fancy firebase register shitttt......
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Base Ads Notice.
        </p>
        {/* <button onClick={register} className="login_registerButton">
          Create your Amazon Acount
        </button> */}
      </div>
    </div>
  );
}

export default Login;
