import React, { useEffect, useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [alert, setAlert] = useState({
    message: '',
    type: '',
    active: false,
  });

  useEffect(() => {
    const handlerTimeOut = setTimeout(
      () => {
        setAlert({
          message: '',
          type: '',
          active: false,
        });
      },

      5000
    );

    return () => {
      clearTimeout(handlerTimeOut);
    };
  }, [alert]);

  const register = (event: any) => {
    event.preventDefault();
    if (email.length === 0) {
      setAlert({
        message: 'Escriba su dirección de correo electrónico',
        type: 'error',
        active: true,
      });
      return;
    }
    if (password.length < 6) {
      setAlert({
        message: 'La contraseña debe tener al menos 6 caracteres',
        type: 'error',
        active: true,
      });
      return;
    }

    if (password !== repeatPassword) {
      setAlert({
        message: 'Las contraseñas no coinciden',
        type: 'error',
        active: true,
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate('/');
        }
      })
      .catch((error) =>
        setAlert({
          message: 'Error al crear la cuenta',
          type: 'error',
          active: true,
        })
      );
    // do some fancy firebase register shitttt......
  };
  return (
    <div className="signup">
      {alert.active && (
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      )}
      <Link to="/">
        <img
          className="signup_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="signup_container">
        <h2>Crear cuenta</h2>
        <form onSubmit={register}>
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
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />

          <button type="submit" className="signup_signInButton">
            Continuar
          </button>
        </form>

        <p>
          Al crear una cuenta, acepta las &nbsp;
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
