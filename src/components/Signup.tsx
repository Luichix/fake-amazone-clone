import React, { useState } from 'react';
import './Signup.css';
import { Link, useRoutes } from 'react-router-dom';
import { auth } from '../services/firebase';

function Signup() {
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

  const register = () => {
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
    <div className="signup">
      <Link to="/">
        <img
          className="signup_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="signup_container">
        <h2>Crear cuenta</h2>
        <form>
          <h5>Correo electrónico</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Contraseña</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Vuelve a escribir la contraseña</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="signup_signInButton"
          >
            Continuar
          </button>
        </form>

        <p>
          Al iniciar sesión, acepta las &nbsp;
          <b>Condiciones de uso y venta de AMAZON FAKE CLONE</b>. Consulte
          nuestro <b>Aviso de Privacidad</b> y nuestro <b>Aviso de anuncios </b>
          &nbsp; basado en intereses.
        </p>

        <p>
          ¿Ya tienes una cuenta? &nbsp;
          <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
